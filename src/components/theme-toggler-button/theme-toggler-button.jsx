import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext, themes } from '../../contexts/theme-switcher'

export const ThemeTogglerButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div>
            <img src={theme.image} alt={theme.alt} onClick={() => setTheme(theme === themes.solrock ? themes.lunatone : themes.solrock)}/>
        </div>
    )
}

const Switcher = styled.img`

`