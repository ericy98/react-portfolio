import React from 'react';
import Page from './components/PagesContainer';
import NavTabs from './components/Nav';
import Footer from './components/Footer';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { initImages } from 'react-adaptive-image';

function App() {

  const client = new ApolloClient({
    uri: '/graphql'
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
