import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: url("/bg.jpg") 0 repeat-y;
    -webkit-font-smoothing: antialised;

    &.no-scroll {
      overflow: hidden;
    }
  }
  body, input, button {
    font-family: Roboto, sans-serif;
  }
`;

export default GlobalStyle;
