import styled from 'styled-components'
import bannerImage from '../../assets/banner.jpg'

export const HeaderBar = styled.header`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: relative; // Não precisa ser absolute
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`

export const Logo = styled.img`
  width: 125px;
`

export const Nav = styled.div`
  color: #e66767;
  font-size: 18px;
  font-weight: bold;
`

export const Cart = styled.div`
  color: #e66767;
  font-size: 16px;
`