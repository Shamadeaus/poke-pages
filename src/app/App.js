import React from 'react'
import ApplicationBar from '../layout/ApplicationBar'
import ThemeProvider from '../theme/ThemeProvider'
import BodyStyles from '../app/BodyStyles'

function App() {
    return (
        <ThemeProvider>
            <BodyStyles/>
            <ApplicationBar/>
        </ThemeProvider>
    )
}

export default App;
