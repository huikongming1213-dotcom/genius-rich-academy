import { useEffect, useRef, useState } from 'react';
import { ArrowRight, FileText, Shield, Brain } from 'lucide-react';

interface Resource {
  icon: typeof FileText;
  title: string;
  description: string;
  color: string;
  cta: string;
}

const FreeResources = () => {
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

  const resources: Resource[] = [
    {
      icon: FileText,
      title: 'How to Build a Watchlist',
      description:
        'The exact framework used to scan 500+ stocks down to 5–10 high-probability setups every morning. Step-by-step process.',
      color: '#9D00FF',
      cta: 'Get Free Guide',
    },
    {
      icon: Shield,
      title: 'Risk Management Guide',
      description:
        'Position sizing, stop-loss placement, and the 1% rule that keeps professional traders in the game long-term.',
      color: '#FF6B00',
      cta: 'Get Free Guide',
    },
    {
      icon: Brain,
      title: 'Trader Psychology Guide',
      description:
        'Why smart people make bad trades — and the mental frameworks to eliminate emotional trading from your strategy.',
      color: '#00F0FF',
      cta: 'Get Free Guide',
    },
  ];

  return (
    <section id="resources" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF6B00]/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#9D00FF]/20 border border-[#9D00FF]/50 text-[#9D00FF] text-sm font-medium mb-4">
            Free Resources
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Learn for <span className="text-[#FF6B00]">Free</span>
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-xl mx-auto">
            Start with these guides. No credit card. No catch.
          </p>
        </div>

        {/* Resource Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {resources.map((res, i) => (
            <div
              key={i}
              className="card-glass p-8 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${res.color}20` }}
              >
                <res.icon size={28} style={{ color: res.color }} />
              </div>
              <h3 className="text-xl font-bold text-white">{res.title}</h3>
              <p className="text-[#B3B3B3] text-sm leading-relaxed flex-1">{res.description}</p>
              <a
                href="https://discord.com/invite/4shc4KT6W7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold transition-colors"
                style={{ color: res.color }}
              >
                {res.cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://discord.com/invite/4shc4KT6W7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Access All Free Resources →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
