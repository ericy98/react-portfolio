import React from 'react';
import Page from './components/PagesContainer';
import NavTabs from './components/Nav';
import Footer from './components/Footer';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

function App() {

  const client = new ApolloClient({
    uri: '/localhost:3001'
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
