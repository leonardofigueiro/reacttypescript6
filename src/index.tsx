import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';

const global = {
  colors: {
    primaryBlue: '#4B69FD',
    secondaryOrange: '#FE652B',
    thirtyWhite: '#FFF9EB',
  },
  images: {
    bigLogo: 'imagens/logo.png',
    smallLogo: 'imagens/logo-pequeno.png',
    airplane: 'imagens/aviao.png',
    participer: 'participante.png',
    sacolas: 'sacolas.png'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={global}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

