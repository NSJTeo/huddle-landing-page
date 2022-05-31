import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
