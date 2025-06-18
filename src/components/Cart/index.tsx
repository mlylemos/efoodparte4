import type { Prato } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { remove, toggleCart } from '../../store/reducers/carrinho'
import { useEffect } from 'react'

import * as S from './styles'
import fechar from '../../assets/fechar.png'
import cancelar from '../../assets/lixeira.png'

const Cart = () => {
    const dispatch = useDispatch()
    const { itens, isOpen } = useSelector((state: RootReducer) => state.carrinho)

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

    return (
        <S.CartContainer>
            <S.Overlay />
            <S.Sidebar>
                <button className="fechar" onClick={() => dispatch(toggleCart())}>
                    <img src={fechar} alt="Fechar carrinho" />
                </button>
                <ul>
                    {itens.map((item: Prato) => (
                        <li key={item.id}>
                            <img src={item.foto} alt={item.nome} />
                            <div>
                                <h3>{item.nome}</h3>
                                <span>R$ {item.preco.toFixed(2)}</span>
                            </div>
                            <button className="cancelar" onClick={() => removeItem(item.id)}><img src={cancelar} alt="apagar item" /></button>
                        </li>
                    ))}
                </ul>
                <S.Total>
                    <span>Valor total</span>
                    <span>R$ {getTotalPrice()}</span>
                </S.Total>
                <S.ContinueButton>Continuar com a entrega</S.ContinueButton>
            </S.Sidebar>
        </S.CartContainer>
    )
}

export default Cart