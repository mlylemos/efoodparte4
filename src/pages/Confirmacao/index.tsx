import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../components/Footer'

const Container = styled.div`
  padding: 32px;
  text-align: center;
  min-height: 60vh;
`

const Title = styled.h2`
  font-size: 24px;
  color: #e66767;
  margin-bottom: 16px;
`

const Text = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
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

  &:hover {
    background-color: #cc5555;
  }
`

const Confirmacao = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { orderId, nome, endereco, cidade } = location.state || {}

  const handleConcluir = () => {
    navigate('/')
  }

  return (
    <>
      <Container>
        <Title>Pedido confirmado!</Title>
        <Text> Pedido número: <strong>{String(orderId).replace('#', '')}</strong> </Text>
        {nome && <Text>Nome: {nome}</Text>}
        {endereco && cidade && <Text>Endereço: {endereco}, {cidade}</Text>}
        <Text>Seu pedido foi realizado com sucesso.</Text>
        <Text>Em breve você receberá sua comida no conforto da sua casa :)</Text>
        <Button onClick={handleConcluir}>Concluir</Button>
      </Container>
      <Footer />
    </>
  )
}

export default Confirmacao