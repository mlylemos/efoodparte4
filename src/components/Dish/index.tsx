import { Card, Description, Title, Image, Info, DishButton } from './styles'

type Props = {
    title: string
    description: string
    image: string
}

const Dish = ({ title, description, image }: Props) => {
    return (
        <Card>
            <Image src={image} alt={title} />
            <Info>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <DishButton>Adicionar ao carrinho</DishButton>
            </Info>
        </Card>
    )
}

export default Dish
