import { useState } from 'react'
import * as S from './CheckoutForm.styles'

type Props = {
    total: string
    onBack: () => void
    onSuccess: (dados: any) => void
}

const PaymentForm = ({ total, onBack, onSuccess }: Props) => {
    const [form, setForm] = useState({
        nome: '',
        numero: '',
        cvv: '',
        mes: '',
        ano: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (onSuccess) onSuccess(form)
    }

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.Title>Pagamento - Valor a pagar: R$ {total}</S.Title>

            <S.Label>Nome no cartão</S.Label>
            <S.Input
                name="nome"
                onChange={handleChange}
                value={form.nome} required 
            />

            <S.Row>
                {/* Use os novos wrappers para o número do cartão e CVV */}
                <S.CardNumberInputWrapper>
                    <S.Label>Número do cartão</S.Label>
                    <S.Input
                        name="numero" type="number"
                        onChange={handleChange}
                        value={form.numero} required
                    />
                </S.CardNumberInputWrapper>
                <S.CvvInputWrapper>
                    <S.Label>CVV</S.Label>
                    <S.Input
                        name="cvv" type="number"
                        onChange={handleChange}
                        value={form.cvv} required
                    />
                </S.CvvInputWrapper>
            </S.Row>
            <S.Row>
                <div>
                    <S.Label>Mês de vencimento</S.Label>
                    <S.Input
                        name="mes"
                        onChange={handleChange}
                        value={form.mes} required 
                    />
                </div>
                <div>
                    <S.Label>Ano de vencimento</S.Label>
                    <S.Input
                        name="ano"
                        onChange={handleChange}
                        value={form.ano} required
                    />
                </div>
            </S.Row>

            <S.Button type="submit">Finalizar pagamento</S.Button>
            <S.Button type="button" onClick={onBack}>
                Voltar para a edição de endereço
            </S.Button>
        </S.Form>
    )
}

export default PaymentForm