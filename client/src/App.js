import React from 'react';
import Page from './components/PagesContainer';
import NavTabs from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <main> 
        <Page>
          <NavTabs></NavTabs>
        </Page>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
