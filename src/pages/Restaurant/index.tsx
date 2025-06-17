import Header from '../../components/Header'
import { Container, DishesGrid } from './styles'
import Dish from '../../components/Dish'
import Footer from '../../components/Footer'
import pizza from '../Home/comidas/pizza.png'
import macarrao from '../Home/comidas/macarrao.png'
import RestaurantBanner from '../../components/RestaurantBanner'

const Restaurant = () => {

    return (
        <>
        <Header />
            <RestaurantBanner
                image={macarrao}
                name="La Dolce Vita Trattoria"
                cuisine="Italiana"
            >
            </RestaurantBanner>
            <Container>
                <DishesGrid>
                <Dish
                    title="Pizza Margherita"
                    description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
                    image={pizza}
                />
                <Dish
                    title="Pizza Margherita"
                    description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
                    image={pizza}
                />
                <Dish
                    title="Pizza Margherita"
                    description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
                    image={pizza}
                />
                <Dish
                    title="Pizza Margherita"
                    description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
                    image={pizza} 
                />
                <Dish
                    title="Pizza Margherita"
                    description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
                    image={pizza}
                />
                <Dish
                    title="Pizza Margherita"
                    description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
                    image={pizza}
                />
                </DishesGrid>
            </Container>
            <Footer />
        </>
    )
}

export default Restaurant