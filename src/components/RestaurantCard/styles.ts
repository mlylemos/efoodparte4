import styled from 'styled-components'

export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  padding: 40px 80px;
  justify-items: center;

  @media (max-width: 768px) {
    padding: 24px;
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  position: relative;
  width: 472px;
  height: 398px;
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`
export const Info = styled.div`
  border: 1px solid #e66767;
  padding: 4px 8px 7px 8px;
  display: flex;
  flex-direction: column;
  height: 181px;
  flex-grow: 1;
`
export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.div`
  background-color: #e66767;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
  margin: 0;
`

export const TitleRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: #e66767;

  img {
    width: 16px;
    margin-left: 4px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #e66767;
  margin-top: 3px;
  line-height: 22px;
`
export const Button = styled.button`
  background-color: #e66767;
  color: #FFEBD9;
  border: none;
  width: 82px;
  height: 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: 0.3s;
  align-self: flex-end;

  &:hover {
    background-color: #c54848;
  }
`