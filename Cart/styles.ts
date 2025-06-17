import styled from 'styled-components'

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
`

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    flex: 1;
`

export const Sidebar = styled.aside`
    width: 360px;
    background-color: #e66767;
    padding: 24px;
    display: flex;
    flex-direction: column;
    color: #fff;
`

    export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 24px;
`

export const CartItem = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;

    img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
    }

    div {
    flex: 1;

    h3 {
        margin: 0;
        font-size: 16px;
    }

    p {
        margin: 4px 0;
    }

    button {
        background: transparent;
        color: #fff;
        border: none;
        text-decoration: underline;
        cursor: pointer;
        font-size: 12px;
        }
    }
`

export const Total = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-top: auto;
    margin-bottom: 16px;

    span {
        float: right;
    }
`

export const Button = styled.button`
    background-color: #fff;
    color: #e66767;
    border: none;
    padding: 12px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
`
