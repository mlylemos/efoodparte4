import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {
    HeaderBar,
    Logo,
    Nav,
    Cart,
    Containeri,
    CenteredWrapper,
    CenteredText
} from './styles'
import Container from '../Container/styles'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../store/reducers/carrinho'
import type { RootReducer } from '../../store'

const Header = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const dispatch = useDispatch()
    const { itens } = useSelector((state: RootReducer) => state.carrinho)

    return (
        <HeaderBar $isHome={isHome}>
            {isHome ? (
                <CenteredWrapper>
                    <Containeri>
                    <Logo $isHome={isHome} src={logo} alt="efood logo" />
                    <CenteredText>
                        Viva experiências gastronômicas no conforto da sua casa
                    </CenteredText>
                    </Containeri>
                </CenteredWrapper>
            ) : (
                <>
                <Container>
                    <Link to="/">
                        <Nav>Restaurantes</Nav>
                    </Link>
                    <Logo src={logo} alt="efood logo" />
                    <Cart onClick={() => dispatch(toggleCart())}>
                        {itens.length} produto(s) no carrinho
                    </Cart>
                </Container>
                </>
            )}
        </HeaderBar>
    )
}

export default Header