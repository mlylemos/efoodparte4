import logo from '../../assets/logo.png'
import { BannerContainer, Title, Logo } from './styles'

const Banner = () => {
    return (
        <BannerContainer>
            <Logo src={logo} alt="efood logo" />
            <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </BannerContainer>
    )
}

export default Banner