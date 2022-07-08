import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './contexts/theme-switcher';
import { Header } from './components/header/header';
import { Pokedex } from './components/pokedex/pokedex';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header/>
        <Pokedex />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }

  html {
    font-size: 62.5%;
    background-color: theme.background;
    color: theme.color; 
  }

  body {
    font-family: 'VT323', monospace;
  }
`

export default App;
