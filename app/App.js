import React from 'react';
import Login from './src/pages/Login';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

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
      <Login />
    </PaperProvider>
  );
}

export default App;
