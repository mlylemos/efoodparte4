import styled from 'styled-components'

export const Card = styled.div`
    background-color: #fff;
    border: 3px solid #e66767;
    border-radius: 8px;
    padding: 16px;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%; 
    `

    export const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    `

    export const Title = styled.h3`
    font-size: 18px;
    margin: 16px 0 8px;
    color: #e66767;
    `

    export const Description = styled.p`
    font-size: 14px;
    color: black;
    margin-bottom: 12px;
    `

    export const DishButton = styled.button`
    margin-top: auto; 
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
        background-color: rgb(226, 203, 74);
    }
    `

    export const Info = styled.div`
    margin-top: 8px;
    margin-bottom: 12px;
    `

    export const Button = styled.button`
    margin-top: auto;
    padding: 8px 16px;
    background-color: #e66767;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    transition: 0.3s;

    &:hover {
        background-color: #c54848;
    }
`