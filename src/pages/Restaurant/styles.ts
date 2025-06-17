import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1024px;
    margin: 40px auto 150px auto;
    padding: 0 16px;
`

export const DishesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 32px;
`