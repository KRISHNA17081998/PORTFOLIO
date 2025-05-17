import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        <Navbar 
          mobileMenuOpen={mobileMenuOpen} 
          toggleMobileMenu={toggleMobileMenu} 
          closeMobileMenu={closeMobileMenu} 
        />
        <main>
          <section id="home" className="pt-16">
            <Home />
          </section>
          <section id="about" className="py-16">
            <About />
          </section>
          <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
            <Skills />
          </section>
          <section id="projects" className="py-16">
            <Projects />
          </section>
          <section id="contact" className="py-16">
            <Contact />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
