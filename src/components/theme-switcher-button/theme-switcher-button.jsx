import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext, themes } from '../../contexts/theme-switcher'

export const ThemeSwitcherButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <Switcher>
            <img src={theme.image} alt={theme.alt} onClick={() => setTheme(theme === themes.solrock ? themes.lunatone : themes.solrock)}/>
        </Switcher>
    )
}

const Switcher = styled.div`
    
    display: flex;

    img {
        cursor: pointer;
        max-width: 76px;
    }

    @media (max-width: 620px) {
        align-self: flex-end;
        margin-right: 15px;

        img {
            max-width: 61px;
        }
    }

    @media (max-width: 375px) {
        img {
            max-width: 58px;
        }
    }
`