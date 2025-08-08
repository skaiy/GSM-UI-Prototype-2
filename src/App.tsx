import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Partners from './components/Partners';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Global Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
        }}
      ></div>
      
      {/* Dark overlay for better readability */}
      <div className="fixed inset-0 bg-slate-900/70 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Partners />
        <News />
        <Footer />
      </div>
    </div>
  );
}

export default App;