import React from 'react';
import { ChevronRight, ShieldCheck, Cpu, ClipboardCheck, Factory } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 mb-16 text-center animate-on-scroll fade-up">
        <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
          <ChevronRight size={16} />
          <span>Why Choose Us</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase">
          The Strength Behind <br /> Industry
        </h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Feature */}
        <div className="text-right space-y-12">
          <div className="group animate-on-scroll fade-right delay-100">
            <div className="flex items-center justify-end gap-4 mb-3">
              <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-brand-yellow transition-colors">ISO/ASTM Compliant</h3>
              <ShieldCheck className="text-brand-yellow" size={32} />
            </div>
            <p className="text-gray-400 text-sm">Rigorous adherence to international manufacturing standards ensuring safety and durability.</p>
          </div>

          <div className="group animate-on-scroll fade-right delay-300">
            <div className="flex items-center justify-end gap-4 mb-3">
              <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-brand-yellow transition-colors">Precision Engineering</h3>
              <Cpu className="text-brand-yellow" size={32} />
            </div>
            <p className="text-gray-400 text-sm">Utilizing cutting-edge CNC and robotic technologies for millimeter-perfect fabrication.</p>
          </div>
        </div>

        {/* Center Video */}
        <div className="h-[500px] relative overflow-hidden rounded-sm border border-white/10 group animate-on-scroll zoom-in delay-200">
          <video
            src="/assets/strength-behind-industry.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            poster="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1932&auto=format&fit=crop"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Right Feature */}
        <div className="text-left space-y-12">
          <div className="group animate-on-scroll fade-left delay-100">
            <div className="flex items-center justify-start gap-4 mb-3">
              <ClipboardCheck className="text-brand-yellow" size={32} />
              <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-brand-yellow transition-colors">Quality Control</h3>
            </div>
            <p className="text-gray-400 text-sm">Strict quality checks and inspection at every stage to ensure accuracy, safety, and reliable output.</p>
          </div>

          <div className="group animate-on-scroll fade-left delay-300">
            <div className="flex items-center justify-start gap-4 mb-3">
              <Factory className="text-brand-yellow" size={32} />
              <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-brand-yellow transition-colors">Saftey & Compliance</h3>
            </div>
            <p className="text-gray-400 text-sm">Committed to safety practices and compliance with required engineering norms and guidelines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
