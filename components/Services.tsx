import React from 'react';
import { ArrowUpRight, ChevronRight, Factory, Settings, Flame } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Structural Steel Fabrication",
      icon: <Factory size={24} />,
      image: "https://img.freepik.com/premium-photo/steel-framework-new-commercial-building_455891-1.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 2,
      title: "Custom Steel Solutions",
      icon: <Settings size={24} />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Heavy Steel Welding & Assembly",
      icon: <Flame size={24} />,
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-6 mb-16 text-center animate-on-scroll fade-up">
        <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
          <ChevronRight size={16} />
          <span>Our Services</span>
          <ChevronRight size={16} />
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
          Steel Manufacturing <span className="text-brand-yellow">Services</span>
        </h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative h-[500px] overflow-hidden rounded-sm cursor-pointer animate-on-scroll fade-up delay-${index * 100}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75"></div>
              </div>

              {/* Floating Icon */}
              <div className="absolute top-8 right-8 bg-brand-yellow text-brand-dark p-4 rounded-full transform transition-all duration-300 group-hover:rotate-12 hover:scale-110 shadow-[0_0_15px_rgba(212,240,56,0.5)]">
                {service.icon}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase pr-10">
                  {service.title}
                </h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                  <p className="text-gray-300 mb-6 text-sm">
                    High-precision engineering meeting the most rigorous industrial standards with advanced technology and expert craftsmanship.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-brand-yellow font-bold uppercase text-sm tracking-wider">
                  <span>View Services</span>
                  <ArrowUpRight size={18} />
                </div>
                <div className="w-full h-1 bg-brand-yellow mt-6 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
