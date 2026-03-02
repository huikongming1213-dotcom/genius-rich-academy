import { useEffect, useRef, useState } from 'react';
import { ArrowRight, AtSign, Heart, MessageCircle, Repeat2 } from 'lucide-react';

interface ThreadPost {
  time: string;
  content: string;
  likes: string;
  replies: string;
  reposts: string;
  tag?: string;
}

const ThreadsEmbed = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const posts: ThreadPost[] = [
    {
      time: '2h ago',
      tag: 'WATCHLIST',
      content:
        'NVDA watching 875 breakout. Volume needs to confirm. Do NOT enter early — amateurs chase, professionals wait. Setting alerts and walking away.',
      likes: '847',
      replies: '63',
      reposts: '124',
    },
    {
      time: '6h ago',
      tag: 'MINDSET',
      content:
        'You do not lose because the market is hard. You lose because you traded when you should have waited. The best trade is often no trade.',
      likes: '1.2K',
      replies: '91',
      reposts: '312',
    },
    {
      time: '1d ago',
      tag: 'REVIEW',
      content:
        'TSLA recap: called the 205 support hold yesterday. Those who waited got the entry. Those who chased at open got shaken out. Patience = edge.',
      likes: '934',
      replies: '74',
      reposts: '187',
    },
  ];

  const tagColors: Record<string, string> = {
    WATCHLIST: '#9D00FF',
    MINDSET: '#FF6B00',
    REVIEW: '#00F0FF',
  };

  return (
    <section id="threads" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[300px] bg-[#9D00FF]/6 rounded-full blur-[100px]" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#9D00FF]/20 border border-[#9D00FF]/50 text-[#9D00FF] text-sm font-medium mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            From <span className="text-[#9D00FF]">Threads</span>
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-xl mx-auto">
            Daily market insights, watchlists, and mindset posts — straight from the feed.
          </p>
        </div>

        {/* Posts Grid */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {posts.map((post, i) => (
            <div
              key={i}
              className="card-glass p-6 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Post Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#9D00FF]/20 border border-[#9D00FF]/50 flex items-center justify-center">
                    <AtSign size={14} className="text-[#9D00FF]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Genius.RichAcademy</p>
                    <p className="text-[#B3B3B3] text-xs">{post.time}</p>
                  </div>
                </div>
                {post.tag && (
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{
                      color: tagColors[post.tag] ?? '#9D00FF',
                      backgroundColor: `${tagColors[post.tag] ?? '#9D00FF'}20`,
                    }}
                  >
                    #{post.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <p className="text-[#B3B3B3] text-sm leading-relaxed flex-1">{post.content}</p>

              {/* Engagement */}
              <div className="flex items-center gap-5 text-[#B3B3B3] text-xs pt-2 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <Heart size={13} /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={13} /> {post.replies}
                </span>
                <span className="flex items-center gap-1">
                  <Repeat2 size={13} /> {post.reposts}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.threads.com/@Genius.RichAcademy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Follow on Threads
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThreadsEmbed;
