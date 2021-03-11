import React, {useState} from 'react'
import usePersistedState from './utils/usePersistedState'

import GlobalStyles from './styles/global'
import Header from './components/Header'

import { ThemeProvider } from 'styled-components'

import dark from './styles/themes/dark'
import light from './styles/themes/light'

function App() {

  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}       

export default App;
