# Pokédex

## Conteúdo
   - [Status](#status)
   - [Sobre](#sobre)
        - [Descrição](#descrição)
        - [Tecnologias utilizadas](#tecnologias-utilizadas)
        - [Alguns métodos utilizados](#alguns-métodos-utilizados)
   - [O quê aprendi](#o-quê-aprendi)
        - [useState e useEffect](#strongusestate-e-useeffectstrong)
        - [Map](#strongmapstrong)
        - [Context API](#strongcontext-apistrong)
   - [Como usar](#como-usar)
   - [Agradecimentos](#agradecimentos)

## Status
 
 <img style="width: 250px;" src="src/img/cachorro-violinista.jpg" alt="Ae cachorro violinista, toca um Changes - Black Sabbath que o pai tá passando por mudanças ;(">

 ### Pokédex: Beta (funcionalidades principais finalizadas) 👨‍💻.

 <br>

## Sobre
  
  O site neste repositório é uma pokédex contendo todos os pokémon registrados na API <a href="https://pokeapi.co/">PokéAPI</a>, a API pública e oficial do Pokémon! Você pode acessar o site <a href="https://pokedex-react-seven-sage.vercel.app/">clicando aqui</a></li>!

  ### Descrição: 

  O site está em beta, o quê significa que as funcionalidades e páginas principais já foram finalizadas mas várias funcionalidades ainda serão implementadas! 
  O site pega os dados dos pokémon da <a href="https://pokeapi.co/">PokéAPI</a> e os renderiza na tela. Cada vez que o usuário clica no "botão de reload" a página adiciona mais 10 pokémon à lista.
  O usuário também pode clicar no card do seu Pokémon preferido para ver
  algumas informações úteis, como os
  ataques principais e suas habilidades!
   <br>
   Além disso eu também coloquei um alternador de temas para as pessoas que, assim como eu, gostam de sites mais escuros :D .
    
   [<img src="src/img/desktop.gif" src="Layout da versão desktop">](https://pokedex-react-seven-sage.vercel.app/)

   ###### <span style="position: absolute; bottom: -2px; color: grey;">Visão geral da página</span>

  ### <li><a href="https://pokedex-react-seven-sage.vercel.app/">Ver site</a></li>

  ### Versão mobile:

  [<img src="src/img/mobile.gif" src="Layout da versão mobile">](https://pokedex-react-seven-sage.vercel.app/)

   <br>

   ### Tecnologias utilizadas:
   
   * HTML Semântico
   * CSS Responsivo
   * JavaScript
   * Git
   * [React](https://reactjs.org/) - Biblioteca JavaScript
   * [ContextAPI](https://pt-br.reactjs.org/docs/context.html) - Gerenciador de Estados React
   * [Styled Components](https://styled-components.com/) - Biblioteca CSS para React
   * [Vite](https://vitejs.dev/) - Build tool JavaScript

   ### Alguns métodos utilizados:

   * Hooks
   * Flexbox
   * Fetch API
   * Manipulação de objetos/arrays
   * Componentes de função React

   <br>

   ## O quê aprendi:

   ### <strong>useState e useEffect</strong>

   Este projeto me ensinou muita coisa, uma delas foi como usar o useState e useEffect para renderizar os pokémon na tela.

   ```js
   const [pokedex, setPokedex] = useState([])
```
  Eu consegui acabar com várias dúvidas sobre o useState, mas o quê eu mais aprendi foi useEffect.

   ```js
   useEffect(() => {
  async function fetchData() {
    const namesResponse = await getNamePokemon(load)
    const pokeList = namesResponse.map(async name => await getPokemon(name))
    let allPokelist = await Promise.all(pokeList)
    setPokedex(allPokelist)
    }
    fetchData()
  }, [load])
```

  O desenvolvimento me fez entender que, antes de entender o useEffect, é preciso entender o ciclo de vida dos componentes React, como ComponentDidMount,  ComponentDidUpdate e ComponentWillUnmount. Foi apenas quando eu entendi que o useEffect serve para "substituir" estas fases do ciclo de vida que eu pude continuar o desenvolvimento.

  ### <strong>Map</strong>

  Também aprendi a diferença entre o Map e o forEach e como usar o map para renderizar um array de dados na tela.

   ```js
  pokedex.map((pokemon, index) => {
                const typeNames = pokemon.types.map(type => type.type.name)
                const [firstType, secondType] = typeNames
                let maxDecPokemonNumber = pokemon.id < 10 ? <span>{`#00${pokemon.id}`}</span> : <span>{`#0${pokemon.id}`}</span>

                return <li key={index}>
                        <PokeCard theme={theme}>
                            <PokeId>
                                <img src={pokemon.sprites.front_default} alt={`${pokemon.name}'s appearance`} />
                                <span>{pokemon.name}</span>
                                {pokemon.id < 100 ? <span>{maxDecPokemonNumber}</span> : <span>{`#${pokemon.id}`}</span>}
                            </PokeId>
                            <PokeTypes>
                                <span>{firstType}</span>
                                {secondType && <span>{secondType}</span>}
                            </PokeTypes>
                        </PokeCard>
                    </li>
            })
```

### <strong>Context API</strong>

Aproveitei a oportunidade para colocar os meus conhecimentos sobre Context API em prática e criar um alternador de temas. Neste caso eu criei uma variável com dois objetos dentro, cada um representando um tema, Solrock (claro) e Lunatone (escuro).

``` js
export const themes = {
    solrock: {
        alt: "Switch to 'dark mode'",
        background: '#e3f3ed',
        border: '#484860',
        buttonBackground: '#a071ee',
        buttonBorder: '#ef713f',
        cardBackground: '#3890d6',
        color: '#f4f4f3',
        headerBackground: '#9e2a28',
        headerColor: '#f4f4f3',
        image: lunatoneSprite,
        pokedexCard: '#d43339',
        pokemonBorder: '#000',
        pokemonColor: '#272626',
        pokemonInfoBg: '#89e5f1',
        pokemonInfoHeaderBorderColor: '#f4f4f3',
        pokemonProfileBg: '#bee9f3',
        pokemonTypeBg: '#9e2a28',
        pokemonTypeColor: '#f4f4f3',
    },
    lunatone: {
        alt: "Switch to 'light mode'",
        background: '#58596f',
        border: '#0e0c0c',
        buttonBackground: '#27193f',
        buttonBorder: '#5825a8',
        cardBackground: '#114269',
        color: '#e2e2e2',
        headerBackground: '#010a2e',
        headerColor: '#e2e2e2',
        image: solrockSprite,
        pokedexCard: '#1a0044',
        pokemonBorder: '#0e0c0c',
        pokemonColor: '#e2e2e2',
        pokemonInfoBg: '#0e535c',
        pokemonInfoHeaderBorderColor: '#0e0c0c',
        pokemonProfileBg: '#2a7585',
        pokemonTypeBg: '#010a2e',
        pokemonTypeColor: '#e2e2e2'
    }
}
```

Para trocar os temas eu criei um componente que retorna um botão com o evento onClick. Quando o botão é clicado, a função alterna o objeto atribuído ao estado do contexto.

``` js
export const ThemeSwitcherButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <Switcher>
            <img src={theme.image} alt={theme.alt} onClick={() => setTheme(theme === themes.solrock ? themes.lunatone : themes.solrock)}/>
        </Switcher>
    )
}
```
Com isso eu também acabei aprendendo muito sobre funções de evento no React.

### <strong>React Router</strong>

Recentemente eu aprendi a usar o React Router para criar Single Page Applications quando fiz a página interna dos Pokémon.

``` js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header/header';
import { Homepage } from './homepage';
import { Pokemon } from './pokemon';

export const AppRoutes = () => {
    return (<BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Homepage />}/>
                    <Route exact path="/pokemon/:id" element={<Pokemon />}/>
                </Routes>
            </BrowserRouter>
)
}
```
O componente AppRoutes é renderizado no componente App e permiete que as rotas sejam carregadas automaticamente, sem a necessidade de recarregar a aplicação.
O id da página é definida pelo hook useParams, que é passado para a função fetch dos dados do Pokémon.

```js
//Hook useParams. A variável id foi acessada por desestruturação.

const { id } = useParams()
```

```js
//O id é repassado como parâmetro da função getPokémon, que busca os dados do pokémon, que então serão renderizados na página.

useEffect(() => {  
        async function fetchPokemon() {
            const pokeData = await getPokemon(id)
            fetchAbilities(pokeData)
            setPokemon({
                name: pokeData.name,
                id: pokeData.id,
                image: pokeData.sprites.front_default,
                moves: pokeData.moves.slice(0,5),
                types: pokeData.types,
            })
        }
        
        fetchPokemon()
    }, [])
```
## Como usar
 
 Se você quiser rodar o site em sua própria máquina, você pode fazer isto seguindo os seguintes comandos.

``` bash
git clone https://github.com/kellysondias/pokedex-react.git
cd pokedex-react
npm install && npm run dev
```

## Agradecimentos
- [pedromarques-dev](https://github.com/pedromarques-dev)
- [cadudias](https://github.com/cadudias)
- [roberto-hofstetter](https://github.com/roberto-hofstetter)
- [pablovianas](https://github.com/pablovianas)

Obrigado por visitar meu repositório! Fique à vontade para comentar ou me dar sugestões :) .
