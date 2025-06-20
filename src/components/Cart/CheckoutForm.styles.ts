import styled from 'styled-components'

export const Form = styled.form`
    background: #e66767;
    padding: 32px 8px;
    color: #FFEBD9;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 9px;
    height: 100%;
    `

    export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #FFEBD9;
    `

    export const CloseButton = styled.button`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 22px;
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    `

    export const Label = styled.label`
    font-size: 17px;
    margin-bottom: 4px;
    padding-bottom: 0;
    border-bottom: 0;
    `

    export const Input = styled.input`
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    border: none;
    background-color: #FFEBD9;
    color: #000;
    font-size: 14px;
    `

    export const Row = styled.div`
    display: flex;
    gap: 8px;

    > div {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    `

    export const Button = styled.button`
    background-color: #FFEBD9;
    border: none;
    border-radius: 8px;
    padding: 8px;
    color: #e66767;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    margin-top: 8px;

    &:hover {
        background-color: #fff;
    }
`