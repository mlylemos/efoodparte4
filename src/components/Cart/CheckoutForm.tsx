import { useState } from 'react'
import * as S from './CheckoutForm.styles'

type Props = {
    total: number
    onBack: () => void
    onSuccess: (dados: CheckoutPayload) => void
}

type CheckoutPayload = {
    nome: string
    endereco: string
    cidade: string
    cep: string
    numero: string
    complemento: string
}

const CheckoutForm = ({ onBack, onSuccess }: Props) => {
    const [form, setForm] = useState<CheckoutPayload>({
        nome: '',
        endereco: '',
        cidade: '',
        cep: '',
        numero: '',
        complemento: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const cepRegex = /^\d{5}-?\d{3}$/
        const nomeRegex = /^[A-Za-zÀ-ÿ\s']+$/

        if (!cepRegex.test(form.cep)) {
            alert('CEP inválido. Use o formato 00000-000')
            return
        }

        if (!nomeRegex.test(form.nome)) {
            alert('Nome do destinatário inválido')
            return
        }

        if (!form.numero || isNaN(Number(form.numero))) {
            alert('Número do endereço inválido')
            return
        }

        onSuccess(form)
    }

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.Title>Entrega</S.Title>

            <S.Label>Quem irá receber</S.Label>
            <S.Input name="nome" value={form.nome} onChange={handleChange} required />

            <S.Label>Endereço</S.Label>
            <S.Input name="endereco" placeholder="Ex: Rua das Flores"value={form.endereco} onChange={handleChange} required />

            <S.Label>Cidade</S.Label>
            <S.Input name="cidade" value={form.cidade} onChange={handleChange} required />

            <S.Row>
                <div>
                    <S.Label>CEP</S.Label>
                    <S.Input name="cep" placeholder="Ex: 12345-678" value={form.cep} onChange={handleChange} required />
                </div>
                <div>
                    <S.Label>Número</S.Label>
                    <S.Input name="numero" type="number" value={form.numero} onChange={handleChange} required />
                </div>
            </S.Row>

            <S.Label>Complemento (opcional)</S.Label>
            <S.Input name="complemento" value={form.complemento} onChange={handleChange} />

            <S.Button style={{ marginTop: "20px" }} type="submit">Continuar com o pagamento</S.Button>
            <S.Button type="button" onClick={onBack}>
                Voltar para o carrinho
            </S.Button>
        </S.Form>
    )
}

export default CheckoutForm