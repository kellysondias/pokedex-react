import { createContext, useState } from 'react'
import solrockSprite from '../img/solrock.png'
import lunatoneSprite from '../img/lunatone.png'

export const themes = {
    solrock: {
        color: '#f4f4f3',
        background: '#e3f3ed',
        cardBackground: '#3890d6',
        headerBackground: '#9e2a28',
        headerColor: '#fff',
        border: '#484860',
        image: lunatoneSprite,
        alt: "Switch to 'dark mode'"
    },
    lunatone: {
        color: '#e2e2e2',
        background: '#58596f',
        cardBackground: '#114269',
        headerBackground: '#010a2e',
        headerColor: '#fff',
        border: '#0e0c0c',
        image: solrockSprite,
        alt: "Switch to 'light mode'"
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