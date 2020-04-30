import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import Router from './router';
import GlobalStyle from './global';
import client from './services/graphqlClient';
import './index.css';


function App() {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Router></Router>
      </ApolloProvider>
    </>
  );
}

export default App;
