import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const TraderIdentity = () => {
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

  const focuses = [
    'High probability setups only',
    'Risk management before entries',
    'Discipline over impulse trading',
    'Waiting, not chasing',
    'Process over outcome',
  ];

  return (
    <section id="identity" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/8 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left — Statement */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/50 text-[#FF6B00] text-sm font-medium mb-6">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              This is{' '}
              <span className="line-through text-[#B3B3B3]/50">not</span> a{' '}
              <span className="text-[#FF6B00]">Signal</span> Service.
            </h2>
            <p className="text-xl text-white font-semibold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              This is how professional traders think.
            </p>
            <p className="text-[#B3B3B3] text-lg leading-relaxed mb-8">
              We don't tell you when to buy and sell. We teach you to read the market
              yourself — to develop the patience, process, and precision of a professional trader.
            </p>
            <a
              href="https://discord.com/invite/4shc4KT6W7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Join Serious Traders
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right — Focus List */}
          <div className="card-glass p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-6">We Focus On:</h3>
            <ul className="space-y-4">
              {focuses.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-[#9D00FF] shrink-0" />
                  <span className="text-white text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[#B3B3B3] text-sm italic">
                "The market rewards patience. Most traders lose because they trade too much —
                not too little."
              </p>
              <p className="text-[#9D00FF] text-sm font-bold mt-2">— Genius Rich Academy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraderIdentity;
