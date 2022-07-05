import { createContext, useState } from 'react'

export const themes = {
    light: {
        color: '#000',
        background: '#eee'
    },
    dark: {
        color: '#fff',
        background: '#000'
    }
}

export const ThemeContext = createContext({})
 
export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}