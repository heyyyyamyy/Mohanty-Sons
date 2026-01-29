import React from 'react';
import { Flame, Building2, Zap, HardHat, Anchor, Wrench, ChevronRight } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Flame size={40} />,
      title: "Steel Plants",
      desc: "Comprehensive fabrication for blast furnaces, steel melting shops, and rolling mills."
    },
    {
      icon: <HardHat size={40} />,
      title: "Sponge Iron Plants",
      desc: "Erection of rotary kilns, coolers, and material handling systems."
    },
    {
      icon: <Building2 size={40} />,
      title: "Cement Plants",
      desc: "Installation of kilns, pre-heaters, and storage silos."
    },
    {
      icon: <Zap size={40} />,
      title: "Power Plants",
      desc: "Boiler erection, ESP installation, and high-pressure piping works."
    },
    {
      icon: <Anchor size={40} />,
      title: "Refineries",
      desc: "Heavy tankage fabrication, pipe racks, and structural maintenance."
    },
    {
      icon: <Wrench size={40} />,
      title: "Heavy Engineering",
      desc: "Custom heavy fabrication for specialized industrial machinery and structures."
    },
    { icon: <Flame size={32} />, title: "Refractories", desc: "Structural works, blast furnace maintenance." },
  ];

  return (
    <section className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="container mx-auto px-6 mb-16 text-center animate-on-scroll fade-up">
        <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
          <ChevronRight size={16} />
          <span>Sectors</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
          Industries We <span className="text-brand-yellow">Serve</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Delivering specialized fabrication and erection solutions across core industrial sectors.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className={`group bg-brand-gray p-8 border border-white/5 hover:border-brand-yellow transition-all duration-300 hover:-translate-y-1 rounded-sm animate-on-scroll fade-up delay-${(index % 3) * 100}`}
            >
              <div className="mb-6 text-gray-400 group-hover:text-brand-yellow transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mb-3 group-hover:text-brand-yellow transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
