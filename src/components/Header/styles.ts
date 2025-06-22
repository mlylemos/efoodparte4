import styled from 'styled-components'
import bannerImage from '../../assets/banner.jpg'

type HeaderProps = {
  $isHome: boolean
}

export const HeaderBar = styled.header<HeaderProps>`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  height: ${({ $isHome }) => ($isHome ? '360px' : '162px')};
  display: flex;
  align-items: center;
  justify-content: ${({ $isHome }) => ($isHome ? 'center' : 'space-between')};
  padding: 0 171px;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 8px;
  align-self: center;
`

export const Nav = styled.div`
  color: #e66767;
  font-size: 18px;
  font-weight: bold;
`

export const Cart = styled.div`
  color: #e66767;
  font-size: 18px;
  font-weight: bold;
`

export const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px; 
  padding-left: 32px;

`

export const CenteredText = styled.p`
  font-size: 36px;
  line-height: 100%;
  height: 84px;
  width: 539px;
  color: #e66767;
  text-align: center;
  font-weight: bold;
  margin: 0;
`