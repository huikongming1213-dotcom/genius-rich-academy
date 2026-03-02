import { useEffect, useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Proof from './sections/Proof';
import WatchlistPreview from './sections/WatchlistPreview';
import TraderIdentity from './sections/TraderIdentity';
import Features from './sections/Features';
import ThreadsEmbed from './sections/ThreadsEmbed';
import FreeResources from './sections/FreeResources';
import EmailCapture from './sections/EmailCapture';
import Testimonials from './sections/Testimonials';
import BrokerPromo from './sections/BrokerPromo';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <main>
        {/* 1. Hero — identity hook */}
        <Hero />
        {/* 2. Proof — trust & social proof */}
        <Proof />
        {/* 3. Watchlist Preview — show the product */}
        <WatchlistPreview />
        {/* 4. Trader Identity — philosophy / positioning */}
        <TraderIdentity />
        {/* 5. Features — what you get */}
        <Features />
        {/* 6. Threads — viral traffic hub */}
        <ThreadsEmbed />
        {/* 7. Free Resources — SEO + lead gen */}
        <FreeResources />
        {/* 8. Email Capture — list building */}
        <EmailCapture />
        {/* 9. Testimonials — social proof close */}
        <Testimonials />
        {/* 10. Broker Promos */}
        <BrokerPromo />
        {/* 11. Contact / Social */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
