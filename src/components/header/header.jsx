import styled, {css} from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-switcher'
import { ThemeTogglerButton } from '../theme-toggler-button/theme-toggler-button'

export const Header = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <header style={{
            backgroundColor: theme.background
        }}>
            <Heading>Pokédex</Heading>
            <ThemeTogglerButton />
        </header>
    )
}

const Heading = styled.h1`
    color: #000;
    font-size: 7rem;
    font-weight: 900;
    margin: 0 auto;
`