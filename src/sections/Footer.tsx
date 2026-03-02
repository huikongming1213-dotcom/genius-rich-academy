import { TrendingUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Watchlist', href: '#watchlist' },
    { label: 'Resources', href: '#resources' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Broker Deals', href: '#broker' },
  ];

  return (
    <footer className="py-16 border-t border-white/10 relative overflow-hidden">
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
              Professional trading education platform. Daily watchlists, live analysis,
              and community for serious traders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#B3B3B3] hover:text-[#9D00FF] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-white font-bold mb-4">Risk Disclaimer</h3>
            <p className="text-[#B3B3B3] text-xs leading-relaxed">
              Day trading involves substantial risk of loss and is not suitable for all investors.
              Past performance is not indicative of future results. Never trade with money
              you cannot afford to lose.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#B3B3B3] text-sm">
            © 2025 Genius Rich Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#B3B3B3] hover:text-[#9D00FF] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#B3B3B3] hover:text-[#9D00FF] text-sm transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
