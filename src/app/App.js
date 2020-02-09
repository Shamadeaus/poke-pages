import React from 'react'
import ApplicationBar from '../layout/ApplicationBar'
import ThemeProvider from '../theme/ThemeProvider'
import BodyStyles from '../app/BodyStyles'
import Router from '../routing/Router'
import { HashRouter } from 'react-router-dom'

function App() {
    return (
        <HashRouter>
            <ThemeProvider>
                <BodyStyles/>
                <ApplicationBar/>
                <Router/>
            </ThemeProvider>
        </HashRouter>
    )
}

export default App;
