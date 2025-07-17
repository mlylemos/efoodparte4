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
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`

export const Logo = styled.img<{ $isHome?: boolean }>`
  width: 125px;
  display: block;
  margin: ${({ $isHome }) =>
    $isHome ? '4px auto 140px auto' : '0 256.71px 0 327px'};
`

export const Nav = styled.div`
  color: #e66767;
  height: 21px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-left: 0;
  padding-left: 0;
  border-left: 0;
`

export const Cart = styled.div`
  color: #e66767;
  height: 21px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-right: 100px;
  margin-left: 10px;
  white-space: nowrap;
  cursor: pointer;
`

export const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CenteredText = styled.p`
  font-size: 36px;
  height: 84px;
  width: 539px;
  color: #e66767;
  text-align: center;
  font-weight: bold;
  padding: 0;
  border: none;
  line-height: 100%;
`

export const Containeri = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`