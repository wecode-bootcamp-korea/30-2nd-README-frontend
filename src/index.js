import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <GlobalFonts />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
