import { Background, Cuisine, Title, Content } from './styles'
import Container from '../Container/styles.ts'

type Props = {
    image: string
    name: string
    cuisine: string
}

const RestaurantBanner = ({ image, name, cuisine }: Props) => (
    <Background image={image}>
        <Container>
            <Content>
                <Cuisine>{cuisine}</Cuisine>
                <Title>{name}</Title>
            </Content>
        </Container>
    </Background>
)

export default RestaurantBanner