import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {StatusBar} from 'react-native';

import Login from './src/pages/Login';
import Home from './src/pages/Home';

function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#E50914',
      background: '#3C3C3C',
      placeholder: '#CCC',
      text: '#FFF',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#000" />
      {/* <Login /> */}
      <Home />
    </PaperProvider>
  );
}

export default App;
