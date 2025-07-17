import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../components/Footer'

const Container = styled.div`
  padding: 16px 32px 32px 32px;
  text-align: center;
  min-height: 60vh;
`

const Title = styled.h2`
  font-size: 28px;
  color: #e66767;
  margin-bottom: 16px;
`

const Text = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
`
const Text1 = styled.p`
  font-size: 20px;
  color: #333;
  margin-bottom: 8px;
  margin-top:  17px;
`

const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 24px; 
  height: 35px;
  display: flex;
  justify-content: center; 
  align-items: center;   
  margin: 24px auto 0 auto;   
  width: fit-content; 

  &:hover {
    background-color: #cc5555;
  }
`

const Confirmacao = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const {
    orderId,
    nome,
    endereco,
    address,
    payment
  } = location.state || {}

  const handleConcluir = () => {
    navigate('/')
  }

  return (
    <>
      <Container>
        <Title>Pedido confirmado!</Title>
        <Text> Pedido número: <strong>{String(orderId).replace('#', '')}</strong> </Text>
        {nome && <Text>Nome: {nome}</Text>}
        {endereco && <Text>Endereço: {endereco}, {address?.number}</Text>}
        <Text>CEP: {address?.zipCode}</Text>
        <Text>Cidade: {address?.city}</Text>
        <Text>Forma de pagamento: Cartão de crédito em nome de {payment?.card?.name}</Text>
        <Text>Final do cartão: **** {payment?.card?.number?.slice(-4)}</Text>
        <Text>Vencimento: {payment?.card?.expires?.month}/{payment?.card?.expires?.year}</Text>
        <Text1><strong>Seu pedido foi realizado com sucesso.</strong></Text1>
        <Text><strong>Em breve você receberá sua comida no conforto da sua casa :)</strong></Text>
        <Button onClick={handleConcluir}>Concluir</Button>
      </Container>
      <Footer />
    </>
  )
}

export default Confirmacao
