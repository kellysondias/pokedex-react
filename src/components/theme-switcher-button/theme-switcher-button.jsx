import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext, themes } from '../../contexts/theme-switcher'

export const ThemeSwitcherButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <Switcher>
            <img style={{
                cursor: 'pointer',
                maxWidth: '76px',   
            }} src={theme.image} alt={theme.alt} onClick={() => setTheme(theme === themes.solrock ? themes.lunatone : themes.solrock)}/>
        </Switcher>
    )
}

const Switcher = styled.div`
    display: flex;
    @media (max-width: 592px) {
        align-self: flex-end;
    }
`