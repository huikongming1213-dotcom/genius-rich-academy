import { useEffect, useRef } from 'react';
import { TrendingUp, Shield, Users } from 'lucide-react';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.feature-card');
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: 'Daily Live Analysis',
      description:
        'Every morning before market open — watchlist breakdowns, key levels, and setups to watch. No guessing, just preparation.',
      color: '#9D00FF',
    },
    {
      icon: Shield,
      title: 'Risk Management First',
      description:
        'Position sizing, stop placement, and capital protection are taught before any entry strategy. Because surviving is winning.',
      color: '#FF6B00',
    },
    {
      icon: Users,
      title: 'Active Trading Community',
      description:
        'Join a focused Discord with serious traders sharing setups, reviews, and accountability. No noise — only signal.',
      color: '#9D00FF',
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 sm:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/50 text-[#FF6B00] text-sm font-medium mb-4">
            What You Get
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Traders Choose{' '}
            <span className="text-[#9D00FF]">Genius Rich</span>
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            A complete trading education system — from watchlist to execution to review.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 card-glass p-8 md:p-10"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon size={28} style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-[#B3B3B3] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://discord.com/invite/4shc4KT6W7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Daily Watchlist →
          </a>
          <p className="text-[#B3B3B3]/60 text-sm mt-3">Free. No credit card required.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
