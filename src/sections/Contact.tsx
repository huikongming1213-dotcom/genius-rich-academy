import { useEffect, useRef, useState } from 'react';
import { Instagram, Youtube, MessageCircle, Mail, AtSignIcon, Twitter } from 'lucide-react';

const Contact = () => {
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

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/genius.richacademy',
      color: '#E4405F',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@%E5%A4%A9%E6%89%8D%E8%87%B4%E5%AF%8C%E5%95%86%E5%AD%B8%E9%99%A2',
      color: '#FF0000',
    },
    {
      name: 'Threads',
      icon: AtSignIcon,
      href: 'https://www.threads.com/@Genius.RichAcademy',
      color: '#5865F2',
    },
    {
      name: 'X',
      icon: Twitter,
      href: 'https://x.com/Genius_RichAca',
      color: '#9D00FF',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0">
        <div className="w-[400px] h-[400px] bg-[#9D00FF]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#9D00FF]/20 border border-[#9D00FF]/50 text-[#9D00FF] text-sm font-medium mb-4">
              聯絡我們
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              與我們保持 <span className="text-[#FF6B00]">聯繫</span>
            </h2>
            <p className="text-[#B3B3B3] text-lg leading-relaxed mb-8">
              追蹤我們的社交媒體，獲取最新市場分析、交易策略與獨家優惠資訊。
              我們的團隊隨時為您解答任何問題。
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#9D00FF] animate-pulse" />
                <span className="text-white">每日市場分析更新</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FF6B00] animate-pulse" />
                <span className="text-white">即時交易策略分享</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#00F0FF] animate-pulse" />
                <span className="text-white">專業團隊線上支援</span>
              </div>
            </div>
          </div>

          {/* Right Content - Social Links */}
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 md:p-8 rounded-2xl bg-[#1A1A1A] border border-white/10 hover:border-[#9D00FF] transition-all duration-300 flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${social.color}20` }}
                >
                  <social.icon
                    size={32}
                    style={{ color: social.color }}
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#9D00FF] transition-colors">
                  {social.name}
                </h3>
                <p className="text-[#B3B3B3] text-sm mt-2">
                  {social.name === 'Email' ? '發送郵件' : '立即追蹤'}
                </p>

                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 30px ${social.color}30`,
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
