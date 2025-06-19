import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import type { RootReducer } from '../../store'
import type { Prato } from '../../types'
import { remove, toggleCart } from '../../store/reducers/carrinho'
import * as S from './styles'
import cancelar from '../../assets/lixeira.png'
import ProductModal from '../ProductModal'
import CheckoutForm from './CheckoutForm'
import PaymentForm from './PaymentForm'
import Confirmacao from './Confirmacao'

const Cart = () => {
    const dispatch = useDispatch()
    const { itens, isOpen } = useSelector((state: RootReducer) => state.carrinho)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedDish, setSelectedDish] = useState<Prato | null>(null)
    const [showCheckout, setShowCheckout] = useState(false)
    const [step, setStep] = useState<'entrega' | 'pagamento' | 'confirmacao'>('entrega')
    const [orderId, setOrderId] = useState<number | null>(null)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!isOpen) return null

    const getTotalPrice = (): string => {
        return itens
            .reduce((acc: number, item: Prato) => acc + item.preco, 0)
            .toFixed(2)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }


    const closeModal = () => {
        setSelectedDish(null)
        setModalOpen(false)
    }

    return (
        <S.CartContainer>
            <S.Overlay />
            <S.Sidebar>
                {!showCheckout ? (
                    <>
                        <ul>
                            {itens.map((item: Prato) => (
                                <li
                                    key={item.id}
                                >
                                    <img src={item.foto} alt={item.nome} />
                                    <div>
                                        <h3>{item.nome}</h3>
                                        <span>R$ {item.preco.toFixed(2)}</span>
                                    </div>
                                    <button
                                        className="cancelar"
                                        onClick={e => {
                                            e.stopPropagation()
                                            removeItem(item.id)
                                        }}
                                    >
                                        <img src={cancelar} alt="apagar item" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <S.Total>
                            <span>Valor total</span>
                            <span>R$ {getTotalPrice()}</span>
                        </S.Total>
                        <S.ContinueButton onClick={() => { if (itens.length > 0) setShowCheckout(true) }}>
                            Continuar com a entrega
                        </S.ContinueButton>
                    </>

                ) : step === 'entrega' ? (
                    <CheckoutForm
                        onBack={() => setShowCheckout(false)}
                        onSuccess={() => setStep('pagamento')}
                    />
                ) : step === 'pagamento' ? (
                    <PaymentForm
                        total={getTotalPrice()}
                        onBack={() => setStep('entrega')}
                        onSuccess={() => {
                            const newOrderId = Math.floor(Math.random() * 100000)
                            setOrderId(newOrderId)
                            setStep('confirmacao')
                        }}
                    />
                ) : (
                    step === 'confirmacao' && orderId && (
                        <Confirmacao
                            orderId={orderId}
                            onFinish={() => {
                                setShowCheckout(false)
                                setStep('entrega')
                                setOrderId(null)
                                dispatch(toggleCart())
                            }}
                        />
                    )
                )}
                {!showCheckout && (
                    <S.ContinueButton
                        style={{ marginTop: 20 }}
                        type="button"
                        onClick={() => {
                            dispatch(toggleCart())
                        }}
                    >
                        Voltar para o restaurante
                    </S.ContinueButton>
                )}

            </S.Sidebar>
            {selectedDish && (
                <ProductModal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    prato={selectedDish}
                />
            )}
        </S.CartContainer>
    )
}

export default Cart