import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Prato } from '../../types'

type CarrinhoState = {
    itens: Prato[]
    isOpen: boolean
}

const initialState: CarrinhoState = {
    itens: [],
    isOpen: false
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Prato>) => {
            state.itens.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((item) => item.id !== action.payload)
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const { adicionar, remove, toggleCart } = carrinhoSlice.actions
export default carrinhoSlice.reducer
