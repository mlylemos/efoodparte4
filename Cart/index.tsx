import { CartContainer, Sidebar, Title, Overlay, CartItem, Total, Button } from './styles'

const Cart = () => {
    return (
        <CartContainer>
            <Overlay />
            <Sidebar>
                <Title>Carrinho</Title>

                <CartItem>
                    <img src="https://via.placeholder.com/80x80" alt="Prato" />
                    <div>
                        <h3>Pizza Margherita</h3>
                        <p>R$ 34,50</p>
                        <button>Remover</button>
                    </div>
                </CartItem>

                <Total>
                    Valor total: <span>R$ 34,50</span>
                </Total>

                <Button>Finalizar compra</Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart
