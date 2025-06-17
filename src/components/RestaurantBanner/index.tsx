import { Title, Cuisine, Background } from './styles'

type Props = {
    image: string
    name: string
    cuisine: string
    children?: React.ReactNode
}

const RestaurantBanner = ({ image, name, cuisine, children }: Props) => (
    <Background image={image}>
        {children}
        <Cuisine>{cuisine}</Cuisine>
        <Title>{name}</Title>
    </Background>
)

export default RestaurantBanner