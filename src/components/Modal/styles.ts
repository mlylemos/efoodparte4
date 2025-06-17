import styled from 'styled-components'

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    `

    export const ModalContainer = styled.div`
    background-color: #e66767;
    color: #fff;
    padding: 32px;
    border-radius: 8px;
    max-width: 1024px;
    width: 100%;
    position: relative;
    display: flex;
    gap: 24px;
    `

    export const Close = styled.button`
    position: absolute;
    top: 8px;
    right: 16px;
    background: none;
    color: #fff;
    border: none;
    font-size: 24px;
    cursor: pointer;
    `

    export const Img = styled.img`
    width: 280px;
    height: auto;
    border-radius: 8px;
    `

    export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    `

    export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    `

    export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    `

    export const Button = styled.button`
    background-color: #fff;
    color: #e66767;
    border: none;
    padding: 8px 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
    margin-top: auto;
`