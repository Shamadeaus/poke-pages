import React, {useState, useMemo, useCallback} from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import lightTheme from './lightTheme'
import darkTheme from './darkTheme'
import ThemeContext from './ThemeContext'

function ThemeProvider({children}) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    const toggleTheme = useCallback(() => {
        setTheme(current => current === 'light' ? 'dark' : 'light')
        localStorage.setItem('theme', theme == 'light' ? 'dark' : 'light')
    }, [theme])

    const currentTheme = useMemo(() => theme === 'light' ? lightTheme : darkTheme, [theme])

    const value = useMemo(() => ({
        theme,
        toggleTheme
    }), [theme, toggleTheme])

    return (
        <ThemeContext.Provider value={value}>
            <MuiThemeProvider theme={currentTheme} >
                {React.Children.map(children, child => React.cloneElement(child, {theme: currentTheme}))}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
