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
} from './styles.ts'

type Props = {
    isOpen: boolean
    onClose: () => void
    title: string
    description: string
    image: string
    portion: string
    price: string
}

const ProductModal = ({
    isOpen,
    onClose,
    title,
    description,
    image,
    portion,
    price
}: Props) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleEsc)
        return () => document.removeEventListener('keydown', handleEsc)
    }, [onClose])

    if (!isOpen) return null

    return (
        <Overlay>
            <ModalContent>
                <CloseButton onClick={onClose}>×</CloseButton>
                <Image src={image} alt={title} />
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Portion>Serve: {portion}</Portion>
                    <Button onClick={onClose}>Adicionar ao carrinho - R$ {price}</Button>
                </Content>
            </ModalContent>
        </Overlay>
    )
}

export default ProductModal