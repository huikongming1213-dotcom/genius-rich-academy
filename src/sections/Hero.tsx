import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.fade-in-element');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-[#0D0D0D]/30 to-[#0D0D0D]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#9D00FF] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">

        <div className="fade-in-element opacity-0">
          <span className="inline-block px-4 py-2 rounded-full bg-[#9D00FF]/20 border border-[#9D00FF]/50 text-[#9D00FF] text-sm font-medium mb-8">
            Professional Trading Education
          </span>
        </div>

        {/* Identity Hook */}
        <div className="fade-in-element opacity-0 animation-delay-200 mb-6">
          <p className="text-xl sm:text-2xl text-[#B3B3B3] font-medium mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Retail traders{' '}
            <span className="line-through opacity-40">chase</span> the market.
          </p>
          <p className="text-xl sm:text-2xl text-white font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Professional traders{' '}
            <span className="text-[#9D00FF] neon-glow-purple">wait for</span> the market.
          </p>
        </div>

        <h1 className="fade-in-element opacity-0 animation-delay-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-gradient">Join 17,000+ Traders</span>
          <br />
          <span className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
            Using Genius Watchlist
          </span>
        </h1>

        <p className="fade-in-element opacity-0 animation-delay-400 text-base sm:text-lg text-[#B3B3B3]/80 max-w-2xl mx-auto mb-10">
          Daily watchlists. Real setups. Professional mindset.
          <br />
          Stop chasing — start waiting for high-probability trades.
        </p>

        {/* CTAs */}
        <div className="fade-in-element opacity-0 animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://discord.com/invite/4shc4KT6W7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-base"
          >
            Get Free Watchlist
            <ArrowRight size={20} />
          </a>
          <a
            href="https://discord.com/invite/4shc4KT6W7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 text-base"
          >
            <MessageCircle size={20} />
            Join Discord Community
          </a>
        </div>

        {/* Mini social proof bar */}
        <div className="fade-in-element opacity-0 animation-delay-600 flex flex-wrap items-center justify-center gap-6 text-sm text-[#B3B3B3]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9D00FF] inline-block" />
            17,000+ Followers
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] inline-block" />
            1,300+ Watchlists Shared
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            Full-time Trader since 2019
          </span>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#9D00FF] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
