import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import type { RootReducer } from '../../store'
import type { Prato } from '../../types'

import { remove, toggleCart, limpar } from '../../store/reducers/carrinho'

import * as S from './styles'
import cancelar from '../../assets/lixeira.png'
import ProductModal from '../ProductModal'
import CheckoutForm from './CheckoutForm'
import PaymentForm from './PaymentForm'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { itens, isOpen } = useSelector((state: RootReducer) => state.carrinho)

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDish, setSelectedDish] = useState<Prato | null>(null)
  const [showCheckout, setShowCheckout] = useState(false)
  const [step, setStep] = useState<'entrega' | 'pagamento'>('entrega')
  const [dadosEntrega, setDadosEntrega] = useState<any>(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  const getTotalPrice = (): number => {
    return itens.reduce((acc: number, item: Prato) => acc + item.preco, 0)
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
                <li key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>R$ {item.preco.toFixed(2)}</span>
                  </div>
                  <button
                    className="cancelar"
                    onClick={(e) => {
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
              <span>R$ {getTotalPrice().toFixed(2)}</span>
            </S.Total>
            <S.ContinueButton
              onClick={() => {
                if (itens.length > 0) setShowCheckout(true)
              }}
            >
              Continuar com a entrega
            </S.ContinueButton>
          </>
        ) : step === 'entrega' ? (
          <CheckoutForm
            total={getTotalPrice()}
            onBack={() => setShowCheckout(false)}
            onSuccess={(dados) => {
              setDadosEntrega(dados)
              setStep('pagamento')
            }}
          />
        ) : (
          <PaymentForm
            total={getTotalPrice().toFixed(2)}
            onBack={() => setStep('entrega')}
            onSuccess={(dadosPagamento) => {
              if (!dadosEntrega) return

              const pedido = {
                products: itens.map((item) => ({
                  id: item.id,
                  price: 0
                })),
                delivery: {
                  receiver: dadosEntrega.nome,
                  address: {
                    description: dadosEntrega.endereco,
                    city: dadosEntrega.cidade,
                    zipCode: dadosEntrega.cep,
                    number: Number(dadosEntrega.numero),
                    complement: dadosEntrega.complemento
                  }
                },
                payment: {
                  card: {
                    name: dadosPagamento.nome,
                    number: dadosPagamento.numero,
                    code: Number(dadosPagamento.cvv),
                    expires: {
                      month: Number(dadosPagamento.mes),
                      year: Number(dadosPagamento.ano)
                    }
                  }
                }
              }

              fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(pedido)
              })
                .then((res) => res.json())
                .then((resposta) => {
                  console.log('Resposta da API:', resposta)

                  const id = resposta.orderId || resposta.id || 'N/A'

                  dispatch(limpar())          
                  dispatch(toggleCart())      

                  setShowCheckout(false)
                  setStep('entrega')
                  setDadosEntrega(null)

                  navigate('/confirmacao', {
                    state: {
                      orderId: id,
                      nome: dadosEntrega.nome,
                      endereco: dadosEntrega.endereco,
                      cidade: dadosEntrega.cidade
                    }
                  })
                })
            }}
          />
        )}
        {!showCheckout && (
          <S.ContinueButton
            style={{ marginTop: 20 }}
            type="button"
            onClick={() => {
              dispatch(toggleCart())
            }}
          >
            Voltar
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