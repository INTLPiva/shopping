import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ebebeb;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
