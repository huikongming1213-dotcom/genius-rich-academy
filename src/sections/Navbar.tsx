import { useState } from 'react';
import { Menu, X, Search, MessageCircle, Instagram, Youtube, AtSign, Twitter, FileText } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrokerOpen, setIsBrokerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navItems = [
    { label: '課程介紹', href: '#features' },
    { label: '學員評價', href: '#testimonials' },
    { 
      label: '開戶優惠', 
      href: '#',
      onClick: () => setIsBrokerOpen(true)
    },
    { 
      label: '聯絡我們', 
      href: '#',
      onClick: () => setIsContactOpen(true)
    },
    {
      label: '熱門文章',
      href: 'https://www.threads.com/@Genius.RichAcademy',
      isExternal: true,
    },
  ];

  const brokerLinks = [
    { label: 'Vigco 證券', href: 'https://vigco.co/3iMb6r' },
  ];

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
      icon: AtSign,
      href: 'https://www.threads.com/@Genius.RichAcademy',
      color: '#000000',
    },
    {
      name: 'X',
      icon: Twitter,
      href: 'https://x.com/GeniusRichAcademy',
      color: '#000000',
    },
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
            <a href="#" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="text-white">Genius</span>
                <span className="text-[#9D00FF]">Rich</span>
                <span className="text-white">Academy</span>
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
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
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="text-[#B3B3B3] hover:text-white transition-colors duration-300 text-sm font-medium relative group cursor-pointer flex items-center gap-1"
                >
                  {item.icon && <item.icon size={14} />}
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9D00FF] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://discord.com/invite/4shc4KT6W7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#FF6B00] rounded-lg hover:bg-[#FF8533] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,0,0.5)]"
              >
                快速查詢
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdcjEKyvFWbaLdQDy24SP5qKZVbq0nyz8RS9HHZYe_4kqpKlw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-[#9D00FF] rounded-lg hover:bg-[#7B00CC] transition-all duration-300"
              >
                加入會員
              </a>
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                className="block text-[#B3B3B3] hover:text-white transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                課程介紹
              </a>
              <a
                href="#testimonials"
                className="block text-[#B3B3B3] hover:text-white transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                學員評價
              </a>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBrokerOpen(true);
                }}
                className="block w-full text-left text-[#B3B3B3] hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                開戶優惠
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsContactOpen(true);
                }}
                className="block w-full text-left text-[#B3B3B3] hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                聯絡我們
              </button>
              <a
                href="https://www.threads.com/@Genius.RichAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#B3B3B3] hover:text-white transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText size={18} />
                最新文章
              </a>
              
              <a
                href="https://discord.com/invite/4shc4KT6W7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-black bg-[#FF6B00] rounded-lg hover:bg-[#FF8533] transition-all duration-300"
              >
                <Search size={18} />
                快速查詢
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdcjEKyvFWbaLdQDy24SP5qKZVbq0nyz8RS9HHZYe_4kqpKlw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#9D00FF] rounded-lg hover:bg-[#7B00CC] transition-all duration-300"
              >
                加入會員
              </a>
            </div>
          </div>
        )}
      </nav>

      {isBrokerOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsBrokerOpen(false)}>
          <div className="relative w-full max-w-md bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsBrokerOpen(false)} className="absolute top-4 right-4 text-[#B3B3B3] hover:text-white">
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">APPROVED BROKERS</h3>
            <p className="text-[#B3B3B3] text-center mb-8 text-sm">使用專屬連結開戶</p>
            <div className="space-y-3">
              {brokerLinks.map((broker) => (
                <a
                  key={broker.label}
                  href={broker.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full py-4 px-6 bg-[#9D00FF]/20 border border-[#9D00FF]/50 rounded-xl hover:bg-[#9D00FF]/30 transition-all duration-300"
                  onClick={() => setIsBrokerOpen(false)}
                >
                  <span className="text-white font-semibold">{broker.label}</span>
                  <span className="text-[#9D00FF]">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {isContactOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsContactOpen(false)}>
          <div className="relative w-full max-w-md bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 text-[#B3B3B3] hover:text-white">
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">聯絡我們</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full py-4 px-6 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: social.color }}
                >
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