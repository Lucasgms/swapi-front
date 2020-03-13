import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';

import Header from './components/header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
