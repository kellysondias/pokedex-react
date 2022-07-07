import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-switcher'

export const Button = props => {
    return (
        <button {...props}/>
    )
}

/* 
color: theme.color,
backgroundColor: theme.background 
*/