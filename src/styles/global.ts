import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;

    min-height: 100%;
  }

  :focus {
    outline: none;
  }

  body, input, textarea, button {
    ${mixins.fonts.textM};
  }




  button {
    border: none;
    cursor: pointer;
  }
`
