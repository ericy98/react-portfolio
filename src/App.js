import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
