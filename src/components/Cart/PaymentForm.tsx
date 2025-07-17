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

        const cardNumberRegex = /^\d{13,19}$/
        const cvvRegex = /^\d{3,4}$/
        const yearRegex = /^\d{4}$/

        const month = Number(form.mes)
        const year = Number(form.ano)

        if (!form.nome.trim()) {
            alert('Nome no cartão inválido, digite ao menos 13 números')
            return
        }

        if (!cardNumberRegex.test(form.numero)) {
            alert('Número do cartão inválido')
            return
        }

        if (!cvvRegex.test(form.cvv)) {
            alert('CVV inválido')
            return
        }

        if (month < 1 || month > 12) {
            alert('Mês de vencimento inválido')
            return
        }

        if (!yearRegex.test(form.ano) || year < new Date().getFullYear()) {
            alert('Ano de vencimento inválido (use 4 dígitos)')
            return
        }

        onSuccess(form)
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
                <S.CardNumberInputWrapper>
                    <S.Label>Número do cartão</S.Label>
                    <S.Input
                        name="numero" type="number"
                        placeholder="Ex: 1234567812345678"
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
            <S.Row style={{ display: 'flex', gap: '34px' }}>
                <div>
                    <S.Label>Mês de vencimento</S.Label>
                    <S.Input
                        name="mes"
                        placeholder="Ex: 12"
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