import { useState } from 'react';
import { ArrowRight, CheckCircle, Mail } from 'lucide-react';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Opens Discord invite as the subscription destination
    window.open('https://discord.com/invite/4shc4KT6W7', '_blank');
    setSubmitted(true);
  };

  const benefits = [
    'Daily watchlist sent every morning',
    'Market analysis & setups',
    'Risk management tips',
    'Unsubscribe anytime',
  ];

  return (
    <section id="subscribe" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9D00FF]/5 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[400px] bg-[#9D00FF]/10 rounded-full blur-[120px]" />
        </div>
      </div>

      <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#9D00FF]/20 border border-[#9D00FF]/50 mb-6">
          <Mail size={28} className="text-[#9D00FF]" />
        </div>

        <span className="inline-block px-4 py-2 rounded-full bg-[#9D00FF]/20 border border-[#9D00FF]/50 text-[#9D00FF] text-sm font-medium mb-4">
          Free Daily Watchlist
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Get the Watchlist{' '}
          <span className="text-[#9D00FF]">Every Morning</span>
        </h2>

        <p className="text-[#B3B3B3] text-lg mb-8">
          Join 17,000+ traders who start their day with our watchlist.
          Free. No spam. Unsubscribe anytime.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {benefits.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5 text-sm text-[#B3B3B3]">
              <CheckCircle size={14} className="text-[#9D00FF]" />
              {b}
            </span>
          ))}
        </div>

        {/* Form */}
        {submitted ? (
          <div className="card-glass p-8 text-center">
            <CheckCircle size={48} className="text-[#9D00FF] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">You're in!</h3>
            <p className="text-[#B3B3B3]">Join our Discord to receive the daily watchlist.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-[#1A1A1A] border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder-[#B3B3B3]/50 text-sm focus:outline-none focus:border-[#9D00FF] transition-colors"
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2 text-sm py-3.5 px-6 whitespace-nowrap"
            >
              Subscribe Free
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="text-[#B3B3B3]/50 text-xs mt-4">
          By subscribing, you'll be directed to our Discord community where watchlists are shared daily.
        </p>
      </div>
    </section>
  );
};

export default EmailCapture;
