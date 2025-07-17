import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #fff8f2;
    color: #000;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none !important;
  }
`

export default GlobalStyles
