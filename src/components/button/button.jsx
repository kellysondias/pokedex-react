import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-switcher'

export const Button = props => {

    const { theme } = useContext(ThemeContext)

    return (
        <button style={{
            border: "none",
            backgroundColor: theme.background

        }} {...props}/>
    )
}

/* 
color: theme.color,
backgroundColor: theme.background 
*/