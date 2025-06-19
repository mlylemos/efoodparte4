import * as S from './CheckoutForm.styles'

type Props = {
    orderId: number
    onFinish: () => void
}

const Confirmacao = ({ orderId, onFinish }: Props) => (
    <S.Form>
        <S.Title>Pedido realizado - {orderId}</S.Title>
        <p>
            Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
        </p>
        <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
        </p>
        <S.Button type="button" onClick={onFinish}>
            Concluir
        </S.Button>
    </S.Form>
)

export default Confirmacao