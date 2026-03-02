import { useState } from 'react';
import { Menu, X, Instagram, Youtube, AtSign, Twitter, FileText, ArrowRight } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrokerOpen, setIsBrokerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navItems = [
    { label: 'Watchlist', href: '#watchlist' },
    { label: 'Resources', href: '#resources' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Broker Deals', href: '#', onClick: () => setIsBrokerOpen(true) },
    { label: 'Contact', href: '#', onClick: () => setIsContactOpen(true) },
  ];

  const brokerLinks = [
    { label: 'Vigco 證券', href: 'https://vigco.co/3iMb6r' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/genius.richacademy', color: '#E4405F' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@%E5%A4%A9%E6%89%8D%E8%87%B4%E5%AF%8C%E5%95%86%E5%AD%B8%E9%99%A2', color: '#FF0000' },
    { name: 'Threads', icon: AtSign, href: 'https://www.threads.com/@Genius.RichAcademy', color: '#333' },
    { name: 'X', icon: Twitter, href: 'https://x.com/GeniusRichAcademy', color: '#333' },
  ];

  const isScrolled = scrollY > 50;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 shrink-0">
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="text-white">Genius</span>
                <span className="text-[#9D00FF]">Rich</span>
                <span className="text-white">Academy</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="text-[#B3B3B3] hover:text-white transition-colors duration-300 text-sm font-medium relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9D00FF] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Sticky CTA — always visible */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.threads.com/@Genius.RichAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#B3B3B3] hover:text-white transition-colors text-sm"
              >
                <FileText size={15} />
                Threads
              </a>
              <a
                href="https://discord.com/invite/4shc4KT6W7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#9D00FF] rounded-lg hover:bg-[#7B00CC] transition-all duration-300 hover:shadow-[0_0_20px_rgba(157,0,255,0.5)]"
              >
                Get Watchlist
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Mobile toggle */}
            <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) =>
                item.onClick ? (
                  <button
                    key={item.label}
                    onClick={() => { setIsMenuOpen(false); item.onClick!(); }}
                    className="block w-full text-left text-[#B3B3B3] hover:text-white transition-colors text-lg font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-[#B3B3B3] hover:text-white transition-colors text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href="https://www.threads.com/@Genius.RichAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#B3B3B3] hover:text-white transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText size={18} /> Threads
              </a>
              <a
                href="https://discord.com/invite/4shc4KT6W7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#9D00FF] rounded-lg hover:bg-[#7B00CC] transition-all"
              >
                Get Free Watchlist <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Broker Modal */}
      {isBrokerOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsBrokerOpen(false)}>
          <div className="relative w-full max-w-md bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsBrokerOpen(false)} className="absolute top-4 right-4 text-[#B3B3B3] hover:text-white"><X size={24} /></button>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">APPROVED BROKERS</h3>
            <p className="text-[#B3B3B3] text-center mb-8 text-sm">Open account with exclusive link</p>
            <div className="space-y-3">
              {brokerLinks.map((broker) => (
                <a key={broker.label} href={broker.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between w-full py-4 px-6 bg-[#9D00FF]/20 border border-[#9D00FF]/50 rounded-xl hover:bg-[#9D00FF]/30 transition-all duration-300"
                  onClick={() => setIsBrokerOpen(false)}>
                  <span className="text-white font-semibold">{broker.label}</span>
                  <span className="text-[#9D00FF]">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsContactOpen(false)}>
          <div className="relative w-full max-w-md bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 text-[#B3B3B3] hover:text-white"><X size={24} /></button>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Follow Us</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full py-4 px-6 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 border border-white/10"
                  style={{ backgroundColor: social.color === '#333' ? '#1a1a1a' : social.color }}>
                  <social.icon size={24} />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
