import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import lightTheme from '../theme/lightTheme';
import ApplicationBar from '../layout/ApplicationBar';
import './app.css'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ApplicationBar/>
    </ThemeProvider>
  );
}

export default App;
