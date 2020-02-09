import React from 'react'
import ApplicationBar from '../layout/ApplicationBar'
import ThemeProvider from '../theme/ThemeProvider'
import BodyStyles from '../app/BodyStyles'
import Router from '../routing/Router'
import { HashRouter } from 'react-router-dom'

function App() {
    return (
        <ThemeProvider>
            <BodyStyles/>
            <ApplicationBar/>
            <HashRouter>
                <Router/>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App;
