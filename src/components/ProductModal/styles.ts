import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    `

    export const ModalContent = styled.div`
    background: #e66767;
    color: #fff;
    padding: 32px;
    border-radius: 8px;
    position: relative;
    max-width: 1024px;
    width: 100%;
    display: flex;
    gap: 32px;
    align-items: flex-start;
    `

    export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 40px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    `

    export const Image = styled.img`
    max-width: 400px;
    max-height: 400px;
    border-radius: 8px;
    `

    export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    `

    export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 16px;
    `

    export const Portion = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 24px;
    `

    export const Description = styled.p`
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
    `

    export const Button = styled.button`
    background: #fff;
    color: #e66767;
    border: none;
    padding: 12px 24px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    align-self: flex-start;
`