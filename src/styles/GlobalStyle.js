import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

	* {
    box-sizing: border-box;
  }

  p {
    line-height: normal;
  }

  a {
    text-decoration: none;
  }

  a:hover,
  button:hover {
    cursor: pointer;
  }

  button {
    border: 0;
  }

  input:focus {
    outline: none;
  }
`;

export default GlobalStyle;
