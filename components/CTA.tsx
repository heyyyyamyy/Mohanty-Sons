import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503428593586-e225b476b52c?q=80&w=2072&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-brand-dark/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll fade-right">
            <div className="flex items-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
              <ArrowRight size={16} />
              <span>Get Started</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 uppercase leading-none">
              Start Your <br/> Industrial <br/> Project
            </h2>
            
            {/* Gallery Strip */}
            <div className="flex gap-4 mt-12">
               {[
                 "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=200&h=150&auto=format&fit=crop",
                 "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=200&h=150&auto=format&fit=crop",
                 "https://images.unsplash.com/photo-1617116467384-5f80b987515d?q=80&w=200&h=150&auto=format&fit=crop"
               ].map((src, i) => (
                 <div key={i} className={`w-32 h-24 border-2 border-white/20 rounded-sm overflow-hidden animate-on-scroll zoom-in delay-${(i + 1) * 200}`}>
                   <img src={src} alt="Gallery" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:pl-10 animate-on-scroll fade-left delay-200">
            <p className="text-xl text-white mb-6 font-medium">
              We provide comprehensive steel manufacturing solutions tailored to your specific industrial needs.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. From concept to completion, our team ensures the highest quality standards.
            </p>
            <div className="flex gap-6">
              <button className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,240,56,0.3)]">
                Get Started
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white hover:text-brand-dark transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;