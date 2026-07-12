import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Extra from './components/Extra';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2564&q=80')] bg-cover bg-fixed bg-center">
      {/* Light overlay for light theme */}
      <div className="absolute inset-0 bg-white/60 z-0 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Extra />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
