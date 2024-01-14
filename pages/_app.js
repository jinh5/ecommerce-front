import '@/styles/globals.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');
  body{
    background-color: #f0f0f0;
    padding:0;
    margin:0;
    font-family: 'Public Sans', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
