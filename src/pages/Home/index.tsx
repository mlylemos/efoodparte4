import Banner from '../../components/Banner'
import RestaurantCard from '../../components/RestaurantCard'
import sushi from './comidas/sushi.png'
import macarrao from './comidas/macarrao.png'
import Footer from '../../components/Footer'

import { Container, List } from './styles'

const Home = () => {
    return (
        <>
            <Banner />
            <Container>
                <List>
                    <RestaurantCard
                        title="Hioki Sushi"
                        image={sushi}
                        tags={['Destaque da semana', 'Japonesa']}
                        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
                        rating={4.9}
                    />
                    <RestaurantCard
                        title="La Dolce Vita Trattoria"
                        image={macarrao}
                        tags={['Italiana']}
                        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                        rating={4.6}
                    />
                    <RestaurantCard
                        title="La Dolce Vita Trattoria"
                        image={macarrao}
                        tags={['Italiana']}
                        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                        rating={4.6}
                    />
                    <RestaurantCard
                        title="La Dolce Vita Trattoria"
                        image={macarrao}
                        tags={['Italiana']}
                        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                        rating={4.6}
                    />
                    <RestaurantCard
                        title="La Dolce Vita Trattoria"
                        image={macarrao}
                        tags={['Italiana']}
                        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                        rating={4.6}
                    />
                    <RestaurantCard
                        title="La Dolce Vita Trattoria"
                        image={macarrao}
                        tags={['Italiana']}
                        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                        rating={4.6}
                    />
                </List>
            </Container>
            <Footer />
        </>
    )
}

export default Home
