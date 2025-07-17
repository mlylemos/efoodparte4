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
            const index = state.itens.findIndex((item) => item.id === action.payload)
            if (index !== -1) {
                state.itens.splice(index, 1)
            }
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        limpar: (state) => {
            state.itens = []
        }
    }
})

export const { adicionar, remove, toggleCart, limpar } = carrinhoSlice.actions
export default carrinhoSlice.reducer