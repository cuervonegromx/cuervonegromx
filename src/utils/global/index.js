import { createGlobalStyle, css } from 'styled-components';

/* eslint-disable-next-line import/prefer-default-export */
export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    *, ::after, ::before {
      box-sizing: border-box;
      margin: 0;
      outline: none;
      border: none;
      padding: 0;
    }

    body {
      background-color: ${theme.colors.cloudNormal};
      color: ${theme.colors.inkNormal};
      font-family: 'Lato', sans-serif;
    }
  `}}
`;
