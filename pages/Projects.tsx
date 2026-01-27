import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Calendar, Building } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Vedanta Alumina Refinery – Mechanical & Structural Works",
      client: "Tata Projects",
      category: "industrial",
      location: "Jharsuguda, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1565439303660-5f9c5d1445d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Maithan Ispat Limited – Sponge Iron Plant Project",
      client: "Maithan Ispat",
      category: "steel",
      location: "Jajpur, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1535976868661-86927958f2da?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "MSP Sponge Iron Pvt. Ltd – Kiln & Cooler Installation",
      client: "MSP Sponge Iron",
      category: "steel",
      location: "Keonjhar, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Shree Metallics Limited – Kiln, Cooler & ESP Works",
      client: "Shree Metallics",
      category: "steel",
      location: "Barbil, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Howrah Gas Sponge Iron – Kiln & Structural Works",
      client: "Howrah Gas",
      category: "steel",
      location: "Raniganj, West Bengal",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "M.B. Ispat – Sponge Iron Unit Project",
      client: "M.B. Ispat",
      category: "steel",
      location: "Durgapur, West Bengal",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Rishab Sponge Iron – Fabrication & Erection Works",
      client: "Rishab Sponge Iron",
      category: "steel",
      location: "Durgapur, West Bengal",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1503939345306-1632688b56f5?q=80&w=2067&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Concast Bengal Industries Pvt. Ltd – Sponge Iron Plant Works",
      client: "Concast Bengal",
      category: "steel",
      location: "Bankura, West Bengal",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 9,
      title: "Bhagabati Sponge Iron – Kiln & Structural Works",
      client: "Bhagabati Sponge Iron",
      category: "steel",
      location: "Jamuria, West Bengal",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1581093588402-41141199a041?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 10,
      title: "UltraTech Cement – Mechanical & Structural Works",
      client: "UltraTech Cement",
      category: "cement",
      location: "Jharsuguda, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 11,
      title: "Jindal Steel & Power Ltd – Conveyor & Pellet Plant Works",
      client: "Jindal Steel",
      category: "steel",
      location: "Barbil, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 12,
      title: "Rungta Steel & Power Ltd – Power Project Execution",
      client: "Rungta Steel",
      category: "power",
      location: "Kamada, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 13,
      title: "Hari Machines Limited – Industrial Fabrication Works",
      client: "Hari Machines",
      category: "industrial",
      location: "Rajgangpur, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 14,
      title: "OCL India Ltd – Cement Plant Maintenance Project",
      client: "OCL India",
      category: "cement",
      location: "Rajgangpur, Odisha",
      year: "Ongoing",
      image: "https://images.unsplash.com/photo-1503762687835-12997a9753a3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 15,
      title: "OCL India Ltd – Refractories Unit Maintenance Works",
      client: "OCL India",
      category: "industrial",
      location: "Rajgangpur, Odisha",
      year: "Ongoing",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 16,
      title: "OCL India Ltd – Power Plant Maintenance Works",
      client: "OCL India",
      category: "power",
      location: "Rajgangpur, Odisha",
      year: "Ongoing",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 17,
      title: "OISL – Industrial Plant Maintenance Works",
      client: "OISL",
      category: "industrial",
      location: "Rajgangpur, Odisha",
      year: "Ongoing",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'steel', label: 'Steel & Sponge Iron' },
    { id: 'cement', label: 'Cement' },
    { id: 'power', label: 'Power Plants' },
    { id: 'industrial', label: 'Industrial & Alumina' },
  ];

  // Fix: Re-run animation observer when filter changes
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filter, filteredProjects.length]);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" 
            alt="Projects Background" 
            className="w-full h-full object-cover opacity-20 animate-on-scroll zoom-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center animate-on-scroll fade-up">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">
            Our <span className="text-brand-yellow">Portfolio</span>
          </h1>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-on-scroll fade-up delay-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-wider border transition-all duration-300 ${
                  filter === cat.id 
                    ? 'bg-brand-yellow text-brand-dark border-brand-yellow' 
                    : 'bg-transparent text-gray-400 border-white/20 hover:border-brand-yellow hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group relative overflow-hidden bg-brand-gray border border-white/5 animate-on-scroll fade-up delay-${((index % 3) + 1) * 100}`}
              >
                <div className="h-64 overflow-hidden relative">
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-xl font-heading font-bold text-white uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-brand-yellow text-sm uppercase tracking-widest mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        Client: {project.client}
                      </p>
                      <button className="border border-white text-white px-6 py-2 text-xs font-bold uppercase hover:bg-white hover:text-brand-dark transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        View Details
                      </button>
                   </div>
                   {/* Status Badge */}
                   <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest z-20 ${project.year === 'Ongoing' ? 'bg-brand-yellow text-brand-dark' : 'bg-white text-brand-dark'}`}>
                     {project.year}
                   </div>
                </div>
                <div className="p-6 bg-brand-gray border-t border-white/5 min-h-[140px] flex flex-col justify-between">
                   <h3 className="text-base font-bold text-white uppercase mb-4 line-clamp-2 leading-snug">{project.title}</h3>
                   <div className="flex justify-between text-xs text-gray-400">
                     <div className="flex items-center gap-2">
                       <MapPin size={12} className="text-brand-yellow" />
                       <span className="truncate max-w-[150px]">{project.location}</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <Building size={12} className="text-brand-yellow" />
                       <span className="uppercase">{project.category}</span>
                     </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-brand-yellow text-brand-dark animate-on-scroll fade-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-heading font-bold uppercase mb-2">Ready for your next project?</h2>
              <p className="text-brand-dark/80 font-medium">We have the expertise to deliver beyond expectations across Odisha and West Bengal.</p>
            </div>
            <a href="#/contact" className="bg-brand-dark text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-brand-dark transition-all shadow-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;