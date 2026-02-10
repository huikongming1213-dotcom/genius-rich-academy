import { useEffect, useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import BrokerPromo from './sections/BrokerPromo';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <BrokerPromo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
