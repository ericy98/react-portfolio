import React, { useState } from 'react';
import Page from './components/PagesContainer';
import NavTabs from "./components/Nav";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App;
