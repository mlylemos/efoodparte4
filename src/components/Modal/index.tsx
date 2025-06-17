import { useEffect } from 'react'
import { Overlay, ModalContainer, Close, Img, Content, Title, Description, Button } from './styles'

type Props = {
    isVisible: boolean
    onClose: () => void
    image: string
    title: string
    description: string
}

const Modal = ({ isVisible, onClose, image, title, description }: Props) => {
    useEffect(() => {
        const escFunction = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', escFunction)
        return () => {
            document.removeEventListener('keydown', escFunction)
        }
    }, [onClose])

    if (!isVisible) return null

    return (
        <Overlay>
            <ModalContainer>
                <Close onClick={onClose}>×</Close>
                <Img src={image} alt={title} />
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Button>Adicionar ao carrinho</Button>
                </Content>
            </ModalContainer>
        </Overlay>
    )
}

export default Modal