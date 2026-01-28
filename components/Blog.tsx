import React from 'react';
import { ChevronRight, Calendar, User, Folder } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Optimizing Large-Scale Steel Projects",
      date: "Dec 24, 2025",
      author: "mohantystudios",
      category: "Uncategorized",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Industrial Welding Best Practices",
      date: "Dec 24, 2025",
      author: "mohantystudios",
      category: "Uncategorized",
      image: "https://cdn.thefabricator.com/a/following-best-practices-for-welding-safety-1737734659.jpg"
    },
    {
      title: "Quality Control in Steel Plants",
      date: "Dec 24, 2025",
      author: "mohantystudios",
      category: "Uncategorized",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlfTDnnRJHROLNKc9HTmoqvUx7jeym5tgZA&s"
    }
  ];

  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 mb-16 animate-on-scroll fade-up">
        <div className="flex items-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
          <ChevronRight size={16} />
          <span>Blog Post</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Steel Manufacturing <br /> Industry Insights
          </h2>
          <p className="text-gray-400 max-w-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className={`bg-brand-gray border border-white/5 group hover:border-brand-yellow/30 transition-all animate-on-scroll fade-up delay-${i * 100}`}>
              <div className="relative overflow-hidden h-60">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-6 text-xs text-gray-400 mb-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 hover:text-brand-yellow transition-colors"><User size={14} /> <span>{post.author}</span></div>
                  <div className="flex items-center gap-2 hover:text-brand-yellow transition-colors"><Folder size={14} /> <span>{post.category}</span></div>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-4 uppercase group-hover:text-brand-yellow transition-colors cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {post.title} in modern construction requires adhering to strict protocols...
                </p>

                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
