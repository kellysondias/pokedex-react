import { createContext, useState } from 'react'
import solrockSprite from '../img/solrock.png'
import lunatoneSprite from '../img/lunatone.png'

export const themes = {
    solrock: {
        color: '#000',
        background: '#9e2a28',
        headerColor: '#fff',
        image: lunatoneSprite,
        alt: "Switch to 'dark mode'"
    },
    lunatone: {
        color: '#fff',
        background: '#252938',
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