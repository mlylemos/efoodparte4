import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {
    HeaderBar,
    Logo,
    Nav,
    Cart,
    CenteredWrapper,
    CenteredText
} from './styles'

const Header = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <HeaderBar $isHome={isHome}>
            {isHome ? (
                <CenteredWrapper>
                    <Logo src={logo} alt="efood logo" />
                    <CenteredText>
                        Viva experiências gastronômicas no conforto da sua casa
                    </CenteredText>
                </CenteredWrapper>
            ) : (
                <>
                    <Nav>Restaurantes</Nav>
                    <Logo src={logo} alt="efood logo" />
                    <Cart>0 produto(s) no carrinho</Cart>
                </>
            )}
        </HeaderBar>
    )
}

export default Header