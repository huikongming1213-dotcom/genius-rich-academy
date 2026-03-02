import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, BookOpen, Star } from 'lucide-react';

interface WinItem {
  ticker: string;
  gain: string;
  color: string;
}

const Proof = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, value: '17,000+', label: 'Followers', color: '#9D00FF' },
    { icon: BookOpen, value: '1,300+', label: 'Watchlists Shared', color: '#FF6B00' },
    { icon: TrendingUp, value: '2019', label: 'Full-time Trader Since', color: '#00F0FF' },
    { icon: Star, value: '87%', label: 'Win Rate (Community)', color: '#9D00FF' },
  ];

  const recentWins: WinItem[] = [
    { ticker: 'TSLA', gain: '+8%', color: '#22c55e' },
    { ticker: 'NVDA', gain: '+12%', color: '#22c55e' },
    { ticker: 'COIN', gain: '+15%', color: '#22c55e' },
    { ticker: 'META', gain: '+9%', color: '#22c55e' },
    { ticker: 'AAPL', gain: '+6%', color: '#22c55e' },
    { ticker: 'AMD', gain: '+11%', color: '#22c55e' },
  ];

  return (
    <section ref={sectionRef} id="proof" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-[#9D00FF]/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/50 text-[#FF6B00] text-sm font-medium mb-4">
            Proof
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Numbers Don't <span className="text-[#9D00FF]">Lie</span>
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-xl mx-auto">
            Real traders. Real results. No hype.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card-glass p-6 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>
              <div
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ fontFamily: 'JetBrains Mono, monospace', color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-[#B3B3B3] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Wins */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Recent Wins</h3>
            <p className="text-[#B3B3B3] text-sm">From the watchlist — community tracked results</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {recentWins.map((win, i) => (
              <div
                key={i}
                className="card-glass p-5 text-center group"
              >
                <div
                  className="text-lg font-bold mb-1 text-white group-hover:text-[#9D00FF] transition-colors"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {win.ticker}
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: win.color }}
                >
                  {win.gain}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://discord.com/invite/4shc4KT6W7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Daily Watchlist →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Proof;
