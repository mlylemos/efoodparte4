import styled from 'styled-components'

export const Card = styled.div`
    background-color: #e66767;
    border-radius: 8px;
    padding: 16px;
    color: #ffebd9;
    max-width: 320px;
`
export const DishButton = styled.button`
    margin-top: 12px;
    padding: 8px 16px;
    background-color: #ffebd9;
    color: #e66767;
    font-weight: 700;
    width: 100%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color:rgb(226, 203, 74);
    }
`

export const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
`

export const Info = styled.div`
    margin-top: 8px;
`

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 1.4;
`

export const Button = styled.button`
    margin-top: 12px;
    background-color: #ffebd9;
    color: #e66767;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    width: 100%;
`
