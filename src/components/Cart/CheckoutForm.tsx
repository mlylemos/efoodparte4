import { useState } from 'react'
import * as S from './CheckoutForm.styles'

type Props = {
    onBack: () => void
    onSuccess: () => void
    onClose?: () => void
}

const CheckoutForm = ({ onBack, onSuccess, onClose }: Props) => {
    const [form, setForm] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        cep: '',
        numero: '',
        complemento: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (onSuccess) onSuccess()
    }

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.Title>
                Entrega
                <S.CloseButton type="button" onClick={onClose || onBack}>
                    ×
                </S.CloseButton>
            </S.Title>

            <div>
                <S.Label>Quem irá receber</S.Label>
                <S.Input name="nome" value={form.nome} onChange={handleChange} />
            </div>

            <div>
                <S.Label>Endereço</S.Label>
                <S.Input name="endereco" value={form.endereco} onChange={handleChange} required />
            </div>

            <div>
                <S.Label>Cidade</S.Label>
                <S.Input name="cidade" value={form.cidade} onChange={handleChange} required />
            </div>

            <S.Row>
                <div>
                    <S.Label>CEP</S.Label>
                    <S.Input name="cep" value={form.cep} onChange={handleChange} />
                </div>
                <div>
                    <S.Label>Número</S.Label>
                    <S.Input name="numero" value={form.numero} onChange={handleChange} required />
                </div>
            </S.Row>

            <div>
                <S.Label>Complemento (opcional)</S.Label>
                <S.Input name="complemento" value={form.complemento} onChange={handleChange} />
            </div>

            <S.Button type="submit">Continuar com o pagamento</S.Button>
            <S.Button type="button" onClick={onBack}>
                Voltar para o carrinho
            </S.Button>
        </S.Form>
    )
}

export default CheckoutForm