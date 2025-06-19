import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/face.png'
import twitter from '../../assets/twitter.png'

import { Container, SocialLinks, Text } from './styles'

const Footer = () => (
    <Container>
        <img src={logo} alt="efood" />
        <SocialLinks>
            <a href="https://www.instagram.com/e.b.a.c/">
                <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/escolabritanicadeartescriativas/">
                <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://x.com/E_B_A_C">
                <img src={twitter} alt="Twitter/X" />
            </a>
        </SocialLinks>
        <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
        </Text>
    </Container>
)

export default Footer
