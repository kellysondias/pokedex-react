import { createContext, useState } from 'react'
import solrockSprite from '../img/solrock.png'
import lunatoneSprite from '../img/lunatone.png'

export const themes = {
    solrock: {
        color: '#000',
        background: '#97d0e9',
        image: lunatoneSprite,
        alt: "Switch to dark mode"
    },
    lunatone: {
        color: '#fff',
        background: '#485064',
        image: solrockSprite,
        alt: "Switch to light mode"
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