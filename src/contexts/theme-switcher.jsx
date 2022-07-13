import { createContext, useState } from 'react'
import solrockSprite from '../img/solrock.png'
import lunatoneSprite from '../img/lunatone.png'

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
        image: lunatoneSprite
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
        image: solrockSprite
    }
}

export const ThemeContext = createContext({})
 
export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(themes.solrock)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}