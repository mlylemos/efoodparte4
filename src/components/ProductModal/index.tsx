import { useEffect } from 'react'
import {
    Overlay,
    ModalContent,
    CloseButton,
    Image,
    Content,
    Title,
    Description,
    Portion,
    Button
} from './styles'

import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/carrinho'
import type { Prato } from '../../types'
import close from '../../assets/fechar.png'

type Props = {
    isOpen: boolean
    onClose: () => void
    prato: Prato
}

const ProductModal = ({ isOpen, onClose, prato }: Props) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(adicionar(prato))
        onClose()
    }

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleEsc)
        return () => document.removeEventListener('keydown', handleEsc)
    }, [onClose])

    if (!isOpen) return null

    const { nome, descricao, foto, porcao, preco } = prato

    return (
        <Overlay onClick={onClose}>
            <ModalContent>
                <CloseButton onClick={onClose}><img src={close} alt="botao fechar" /></CloseButton>
                <Image src={foto} alt={nome} />
                <Content>
                    <Title>{nome}</Title>
                    <Description>{descricao}</Description>
                    <Portion>Serve: {porcao}</Portion>
                    <Button onClick={handleAddToCart}>
                        Adicionar ao carrinho - R$ {preco.toFixed(2)}
                    </Button>
                </Content>
            </ModalContent>
        </Overlay>
    )
}

export default ProductModal
