import React from 'react';
import Page from './components/PagesContainer';
import NavTabs from './components/Nav';
import Footer from './components/Footer';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql'
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <Page>
          <NavTabs></NavTabs>
        </Page>
      </main>
      <Footer />
    </ApolloProvider>
  )
}

export default App;
