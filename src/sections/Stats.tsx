import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
  isVisible: boolean;
}

const StatItem = ({ value, label, suffix = '', prefix = '', isVisible }: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  const formatValue = () => {
    if (value.includes('.')) {
      return displayValue.toFixed(1);
    }
    return Math.floor(displayValue).toLocaleString();
  };

  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <span className="text-[#9D00FF] neon-glow-purple">
          {prefix}{formatValue()}{suffix}
        </span>
      </div>
      <div className="text-[#B3B3B3] text-sm sm:text-base">{label}</div>
    </div>
  );
};

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '2500', label: '活躍會員人數', suffix: '+' },
    { value: '87', label: '學員獲利率', suffix: '%' },
    { value: '12000', label: '教學時數', suffix: '+' },
    { value: '2.5', label: '學員總獲利', prefix: '$', suffix: 'M+' },
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-[#9D00FF]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
