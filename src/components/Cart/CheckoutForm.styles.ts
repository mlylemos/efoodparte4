import styled from 'styled-components'

export const Form = styled.form`
    background: #e66767;
    padding: 0;
    color: #FFEBD9;
    font-family: 'Roboto', sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 9px;
    height: 100%;
    width: 344px;
    `

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #FFEBD9;
    height: 19px;
    `

export const Label = styled.label`
    font-size: 14px;
    padding-bottom: 0;
    border-bottom: 0;
    font-weight: 700;
    height: 16px;
    `

export const Input = styled.input`
    width: 100%;
    height: 32px;
    padding: 8px;
    border: none;
    background-color: #FFEBD9;
    color: #000;
    font-size: 14px;
    `

export const Row = styled.div`
    display: flex;
    gap: 29px; 
    margin-bottom: 0; 

    > div {
        display: flex;
        flex-direction: column;

        label {
        margin-bottom: 9px;
        }
    }
    `

export const Button = styled.button`
    background-color: #FFEBD9;
    border: none;
    height: 24px;
    width: 100%;
    padding: 8px;
    color: #e66767;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
        background-color: #fff;
    }
`

export const CardNumberInputWrapper = styled.div`
    width: 228px; 
    flex-direction: column;
`;

export const CvvInputWrapper = styled.div`
    width: 87px; 
    display: flex;
    flex-direction: column;
`;
