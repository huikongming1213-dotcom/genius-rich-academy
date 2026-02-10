import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Gift } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Broker {
  name: string;
  discount: string;
  link: string;
}

const BrokerPromo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const brokers: Broker[] = [
    { name: '富途牛牛', discount: 'AZEW1', link: 'https://invest.futuhk.com/' },
    { name: '老虎證券', discount: 'GENIUS888', link: 'https://promo.firstrade.com/apply/zh-tw/' },
    { name: '長橋證券', discount: 'XM05EK', link: 'https://econmanblog.com/vantage/index.html?utm_source=google&utm_medium=paid&utm_campaign=23540940408&utm_content=194505759273&utm_term=%E8%AD%89%E5%88%B8%20%E9%96%8B%E6%88%B6%20%E5%84%AA%E6%83%A0&gadid=796680774391&gad_source=1&gad_campaignid=23540940408&gbraid=0AAAABBrfp2duxzjnWNwBDJ_mRLYnOTgYU&gclid=Cj0KCQiAy6vMBhDCARIsAK8rOglFL1gzL8oDGOVsqNSqVa24UQbFsxXFnAWswQQEIuDdNiiSmLnAhWkaAlJTEALw_wcB' },

  ];

  return (
    <section
      id="broker"
      ref={sectionRef}
      className="py-20 sm:py-32 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-[#9D00FF]/20 to-[#FF6B00]/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#9D00FF] to-[#FF6B00] mb-8 animate-glow-pulse">
            <Gift size={40} className="text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            會員獨家 <span className="text-gradient">開戶優惠</span>
          </h2>

          <p className="text-[#B3B3B3] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            透過 Genius Rich Academy 開戶，享專屬手續費折扣與優惠
            <br />
            <span className="text-[#FF6B00]">最高可省 70% 交易成本</span>
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary text-lg py-4 px-10 animate-glow-pulse"
          >
            選擇券商開戶
          </button>

          <p className="text-[#B3B3B3]/60 text-sm mt-6">
            點擊按鈕查看合作券商與專屬優惠
          </p>
        </div>
      </div>

      {/* Broker Selection Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-[#1A1A1A] border border-white/10 max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
              選擇您的 <span className="text-[#9D00FF]">券商</span>
            </DialogTitle>
          </DialogHeader>

          <p className="text-[#B3B3B3] text-center mb-8">
            點擊下方券商按鈕，立即享有 Genius Rich Academy 會員專屬優惠
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brokers.map((broker, index) => (
              <a
                key={index}
                href={broker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-xl bg-[#0D0D0D] border border-white/10 hover:border-[#9D00FF] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#9D00FF] transition-colors">
                      {broker.name}
                    </h3>
                    <p className="text-[#FF6B00] text-sm font-medium mt-1">
                      {broker.discount}
                    </p>
                  </div>
                  <ExternalLink
                    size={20}
                    className="text-[#B3B3B3] group-hover:text-[#9D00FF] transition-colors"
                  />
                </div>
                <div className="absolute inset-0 rounded-xl bg-[#9D00FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/30">
            <p className="text-[#FF6B00] text-sm text-center">
              優惠僅限 Genius Rich Academy 會員使用，開戶時請輸入專屬推薦碼
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BrokerPromo;
