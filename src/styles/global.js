import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    max-width: 1086px;
    margin: 0 auto;
    padding: 36px 20px;
  }
`;
