import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-switcher'
import { ThemeSwitcherButton } from '../theme-switcher-button/theme-switcher-button'

export const Header = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <Heading theme={theme}>
            <h1 style={{
                fontSize: '3.5rem',
                fontWeight: '400',
            }}>Pokédex</h1>
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
    padding: 5px 136px 0 136px;

    @media (max-width: 592px) {
        flex-direction: column-reverse;
        padding: 0 0 32px 0;
        padding-bottom: 32px;
    }
`