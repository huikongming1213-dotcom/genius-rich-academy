import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  profit: string;
  content: string;
  avatar: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: '陳先生',
      role: '全職交易員 | 會員 6 個月',
      profit: '+ $45,000',
      content: '加入 Genius Rich Academy 後，我的交易策略變得有系統。老師的即時分析讓我避開了很多陷阱，現在已經穩定獲利半年。',
      avatar: '/avatar-1.jpg',
    },
    {
      name: '林小姐',
      role: '兼職交易者 | 會員 3 個月',
      profit: '+ $18,500',
      content: '原本完全不懂日內交易，跟著課程一步步學，現在每天花 2 小時就能有穩定收入。社群的支援真的很棒！',
      avatar: '/avatar-2.jpg',
    },
    {
      name: '王先生',
      role: '退休投資人 | 會員 1 年',
      profit: '+ $120,000',
      content: '退休後開始學習日內交易，這裡的教學讓我從零基礎到現在能獨立操作。風險控管課程尤其有價值。',
      avatar: '/avatar-3.jpg',
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <div className="w-[400px] h-[400px] bg-[#FF6B00]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#9D00FF]/20 border border-[#9D00FF]/50 text-[#9D00FF] text-sm font-medium mb-4">
            學員評價
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            真實學員 <span className="text-[#FF6B00]">獲利見證</span>
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            來自各行各業的學員，透過我們的課程實現財務目標
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="card-glass p-8 md:p-12 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-[#9D00FF]/30">
                      <Quote size={48} />
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[#9D00FF]"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-xl md:text-2xl font-bold mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-[#B3B3B3] text-sm">{testimonial.role}</p>
                        </div>

                        <div className="mb-4">
                          <span className="inline-block px-4 py-2 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] font-bold text-lg" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                            {testimonial.profit}
                          </span>
                        </div>

                        <p className="text-white/90 text-base md:text-lg leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:border-[#9D00FF] hover:text-[#9D00FF] transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:border-[#9D00FF] hover:text-[#9D00FF] transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#9D00FF] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
