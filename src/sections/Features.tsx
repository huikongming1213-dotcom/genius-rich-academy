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
      title: '即時盤中分析',
      description: '每日開盤期間專業分析師即時解盤，掌握每一個進出場時機。透過即時訊號與市場解讀，讓您不再錯過任何獲利機會。',
      color: '#9D00FF',
    },
    {
      icon: Shield,
      title: '風險控管策略',
      description: '學習專業止損與資金管理，保護本金同時最大化獲利潛能。完善的風險控管系統是長期獲利的關鍵。',
      color: '#FF6B00',
    },
    {
      icon: Users,
      title: '專屬交易社群',
      description: '加入活躍的交易員社群，與志同道合的夥伴交流策略與心得。在學習的路上，您永遠不會孤單。',
      color: '#9D00FF',
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 sm:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/50 text-[#FF6B00] text-sm font-medium mb-4">
            課程特色
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            為什麼選擇 <span className="text-[#9D00FF]">Genius Rich</span>
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            我們提供完整的交易教育體系，從基礎到進階，助您成為專業交易員
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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
      </div>
    </section>
  );
};

export default Features;
