import { Card, Description, Title, Image, Button } from './styles'

type Props = {
    title: string
    description: string
    image: string
    onClick: () => void
}

const Dish = ({ title, description, image, onClick }: Props) => (
    <Card>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button onClick={onClick}>Mais detalhes</Button>
    </Card>
)

export default Dish