import logo from '../../assets/logo.png'
import { HeaderBar, Logo, Nav, Cart } from './styles'

const Header = () => {
    return (
        <HeaderBar>
            <Nav>Restaurantes</Nav>
            <Logo src={logo} alt="efood logo" />
            <Cart>0 produto(s) no carrinho</Cart>
        </HeaderBar>
    )
}

export default Header