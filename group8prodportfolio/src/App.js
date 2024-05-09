// App.js
import React from 'react';
import './App.css';
import About from './pages/About';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <header>
        <h1>Group 8 Productions</h1>
      </header>
      <div>
        <About />
        <Team />
        <Projects />
        <Contact />
      </div>
      <footer>
        <p>&copy; 2024 Group 8 Productions.</p>
      </footer>
    </>
  );
}

export default App;
