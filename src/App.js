import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
