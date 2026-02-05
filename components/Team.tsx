import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';


const Team: React.FC = () => {
  const team = [
    { name: "Akshaya Kumar Mohanty", role: "Director", img: "/director-akshaya-ku-mohanty.jpeg", position: "center 25%" },
    { name: "Ajay Kumar Mohanty", role: "Director", img: "/AJAY KUMAR MOHANTY.png", position: "center 5%" },
    { name: "Amulya Kumar Mohanty", role: "Manager", img: "/managerImage.jpg", position: "center 25%" },
    { name: "Bijay Kumar Mohanty", role: "Manager", img: "/manager-mr-bijay-kumar-mohanty.jpeg", position: "center 25%" },
  ];

  return (
    <section className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6 mb-16 text-center animate-on-scroll fade-up">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-4">
          Our <span className="text-brand-yellow">Leadership</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Guided by experienced visionaries committed to industrial excellence.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className={`group bg-brand-dark border border-white/5 pb-5 hover:border-brand-yellow/50 transition-all duration-300 animate-on-scroll fade-up delay-${index * 100}`}>
              <div className="relative overflow-hidden mb-5 h-80">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: member.position }}
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="p-2 bg-brand-yellow text-brand-dark rounded-full hover:bg-white transition-colors"><Facebook size={18} /></a>
                  <a href="#" className="p-2 bg-brand-yellow text-brand-dark rounded-full hover:bg-white transition-colors"><Twitter size={18} /></a>
                  <a href="#" className="p-2 bg-brand-yellow text-brand-dark rounded-full hover:bg-white transition-colors"><Linkedin size={18} /></a>
                </div>
              </div>
              
              <div className="text-center px-4">
                <h3 className="text-lg font-heading font-bold text-white uppercase mb-1">{member.name}</h3>
                <p className="text-brand-yellow text-sm font-medium">{member.role}</p>
              </div>
              
              <div className="mx-auto w-12 h-1 bg-brand-yellow mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
