import styled from 'styled-components'

export const LoadingMessage = styled.p`
    text-align: center;
    `

    export const Banner = styled.div`
    width: 100%;
    height: 280px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: flex-end;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5); 
    }
    `

    export const BannerText = styled.div`
    position: relative;
    padding: 24px;
    color: #fff;
    z-index: 1;

    h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    p {
        margin-top: 8px;
        font-size: 17px;
        line-height: 1.4;
        max-width: 700px;
    }
    `

    export const Container = styled.div`
    max-width: 1024px;
    margin: 40px auto;
    padding: 0 16px;
`

export const DishesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`