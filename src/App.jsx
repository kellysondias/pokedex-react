import { createGlobalStyle } from 'styled-components'
import { ThemeProvider, themes } from './contexts/theme-switcher';
import { Header } from './components/header/header';
import { Pokedex } from './components/pokedex/pokedex';
import { AppRoutes } from './pages/routes';

function App() {

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
        <h1>Erro :(</h1>
        {/* <Header />
        <Pokedex /> */}
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
  }
  

  html {
    font-size: 62.5%;
    background-color: theme.background;
    color: theme.color; 
  }

  body {
    font-family: 'VT323', monospace;
  }

  ol, ul {
    list-style: none;
  }
`

export default App;
