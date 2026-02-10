import { TrendingUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: '課程介紹', href: '#features' },
    { label: '學員評價', href: '#testimonials' },
    { label: '開戶優惠', href: '#broker' },
    { label: '隱私政策', href: '#' },
  ];

  return (
    <footer className="py-16 border-t border-white/10 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <a href="#" className="flex items-center space-x-2 mb-4">
              <TrendingUp className="text-[#9D00FF]" size={28} />
              <span className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="text-white">Genius</span>
                <span className="text-[#9D00FF]">Rich</span>
                <span className="text-white">Academy</span>
              </span>
            </a>
            <p className="text-[#B3B3B3] text-sm leading-relaxed">
              專業日內交易教育平台，致力於幫助學員掌握專業交易技能，實現財務自由。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">快速連結</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#B3B3B3] hover:text-[#9D00FF] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-white font-bold mb-4">風險聲明</h3>
            <p className="text-[#B3B3B3] text-xs leading-relaxed">
              日內交易涉及高風險，可能導致資金損失。過去績效不代表未來結果。
              請謹慎評估自身風險承受能力，切勿投入超過您能承擔損失的資金。
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#B3B3B3] text-sm">
            © 2024 Genius Rich Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#B3B3B3] hover:text-[#9D00FF] text-sm transition-colors">
              服務條款
            </a>
            <a href="#" className="text-[#B3B3B3] hover:text-[#9D00FF] text-sm transition-colors">
              隱私政策
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
