import React from 'react';
import Page from './components/PagesContainer';
import NavBar from './components/Nav';
import Footer from './components/Footer';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'

function App() {

  const client = new ApolloClient({
    uri: '/graphql'
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <Page>
          <NavBar>
            <Stwitch>
              <Route exact path="/About" component={About} />
            </Stwitch>
          </NavBar>
        </Page>
      </main>
      <Footer />
    </ApolloProvider>
  )
}

export default App;
