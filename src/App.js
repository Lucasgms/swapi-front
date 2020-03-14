import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import GlobalStyle from './styles/global';
import Routes from './routes';
import graphQLClient from './services/service';

import Header from './components/header';

function App() {
  return (
    <ApolloProvider client={graphQLClient}>
      <Header />
      <Routes />
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
