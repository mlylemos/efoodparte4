import styled from 'styled-components'
import backgroundImage from '../../assets/banner.jpg'

export const BannerContainer = styled.div`
  width: 100%;
  height: 384px;
  background-image: url(${backgroundImage});
  background-repeat: repeat;
  background-size: auto;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  margin-bottom: 16px;
`

export const Title = styled.h2`
  color: #e66767;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  line-height: 42px;
  margin-top: 24px;
  max-width: 540px;
`