import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-switcher'
import { ThemeSwitcherButton } from '../theme-switcher-button/theme-switcher-button'

export const Header = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <Heading theme={theme}>
            <h1>Pokédex</h1>
            <ThemeSwitcherButton />
        </Heading>
    )
}

const Heading = styled.header`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    color: ${props => props.theme.headerColor};
    background-color: ${props => props.theme.background};
    padding-top: 5px;

    h1 {
        font-size: 3.5rem;
        font-weight: '400';
        margin-left: 24px;
    }

    @media (max-width: 620px) {
        flex-direction: column-reverse;
        padding-bottom: 32px;

        h1 {
            margin-left: 0;
            text-align: center;
        }

        img {
            max-width: 61px;
        }
    }
`