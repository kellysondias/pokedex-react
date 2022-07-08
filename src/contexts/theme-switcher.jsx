import { createContext, useState } from 'react'
import solrockSprite from '../img/solrock.png'
import lunatoneSprite from '../img/lunatone.png'

export const themes = {
    solrock: {
        color: '#6d6d6b',
        background: '#e3f3ed',
        headerBackground: '#9e2a28',
        headerColor: '#fff',
        image: lunatoneSprite,
        alt: "Switch to 'dark mode'"
    },
    lunatone: {
        color: '#f4f4f3',
        background: '#58596f',
        headerBackground: '#010a2e',
        headerColor: '#fff',
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