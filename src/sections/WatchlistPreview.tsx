import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface WatchItem {
  ticker: string;
  note: string;
  type: 'bullish' | 'bearish' | 'watching';
}

const WatchlistPreview = () => {
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

  const watchlist: WatchItem[] = [
    { ticker: 'NVDA', note: 'Waiting for breakout above 875 — watching volume confirmation', type: 'bullish' },
    { ticker: 'TSLA', note: 'Watching support at 205 — do not chase, wait for bounce confirmation', type: 'watching' },
    { ticker: 'META', note: 'Strong trend continuation setup — pullback to 500 area of interest', type: 'bullish' },
    { ticker: 'AAPL', note: 'Consolidating below 195 resistance — avoid until breakout', type: 'watching' },
    { ticker: 'AMD', note: 'Rejection from 175 — watching for lower support retest', type: 'bearish' },
  ];

  const typeConfig = {
    bullish: { icon: TrendingUp, color: '#22c55e', label: 'Bullish' },
    bearish: { icon: TrendingDown, color: '#ef4444', label: 'Bearish' },
    watching: { icon: Minus, color: '#FF6B00', label: 'Watching' },
  };

  return (
    <section id="watchlist" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#9D00FF]/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#9D00FF]/20 border border-[#9D00FF]/50 text-[#9D00FF] text-sm font-medium mb-4">
            Daily Watchlist
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Today's <span className="text-[#9D00FF]">Watchlist</span>
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-xl mx-auto">
            This is how professional traders prepare — not reacting, but waiting.
          </p>
        </div>

        {/* Watchlist Card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Card Header */}
          <div className="card-glass rounded-t-2xl rounded-b-none border-b-0 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#9D00FF] animate-pulse" />
              <span className="font-bold text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                GENIUS WATCHLIST
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#B3B3B3] text-sm">
              <Clock size={14} />
              <span>Updated daily</span>
            </div>
          </div>

          {/* Watchlist Items */}
          <div className="bg-[#111111] border border-white/10 border-t-0 rounded-b-2xl overflow-hidden">
            {watchlist.map((item, i) => {
              const config = typeConfig[item.type];
              return (
                <div
                  key={i}
                  className="px-6 py-4 border-b border-white/5 last:border-b-0 hover:bg-white/3 transition-colors flex items-start gap-4"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Ticker */}
                  <div
                    className="text-lg font-bold shrink-0 w-16"
                    style={{ fontFamily: 'JetBrains Mono, monospace', color: config.color }}
                  >
                    {item.ticker}
                  </div>

                  {/* Note */}
                  <div className="flex-1 text-[#B3B3B3] text-sm leading-relaxed">
                    {item.note}
                  </div>

                  {/* Type Badge */}
                  <div
                    className="shrink-0 flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium"
                    style={{ backgroundColor: `${config.color}20`, color: config.color }}
                  >
                    <config.icon size={12} />
                    {config.label}
                  </div>
                </div>
              );
            })}

            {/* Blur / Gate for full watchlist */}
            <div className="relative px-6 py-6 text-center bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/90 to-transparent">
              <p className="text-[#B3B3B3] text-sm mb-4">
                + 15 more tickers in today's full watchlist
              </p>
              <a
                href="https://discord.com/invite/4shc4KT6W7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm py-3 px-6"
              >
                Get Full Watchlist Free
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-[#B3B3B3]/60 text-sm mt-6">
          Free daily watchlist shared in Discord community every morning.
        </p>
      </div>
    </section>
  );
};

export default WatchlistPreview;
