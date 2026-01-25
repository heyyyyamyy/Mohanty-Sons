import React, { useState } from 'react';
import { ChevronRight, MapPin, Calendar, Building } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Vedanta Alumina Refinery",
      client: "Tata Projects",
      category: "alumina",
      location: "Lanjigarh, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1565439303660-5f9c5d1445d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Steel Plant Expansion",
      client: "Jindal Steel & Power",
      category: "steel",
      location: "Angul, Odisha",
      year: "Ongoing",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Cement Plant Upgrade",
      client: "UltraTech Cement",
      category: "cement",
      location: "Jharsuguda, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Power Plant Boiler Erection",
      client: "OCL India",
      category: "power",
      location: "Rajgangpur, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Sponge Iron Unit",
      client: "MSP Sponge Iron",
      category: "steel",
      location: "Keonjhar, Odisha",
      year: "Completed",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Heavy Structural Works",
      client: "Maithan Ispat",
      category: "steel",
      location: "Kalinganagar, Odisha",
      year: "Ongoing",
      image: "https://images.unsplash.com/photo-1503762687835-12997a9753a3?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'steel', label: 'Steel & Sponge Iron' },
    { id: 'cement', label: 'Cement' },
    { id: 'power', label: 'Power Plants' },
  ];

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
                className={`group relative overflow-hidden bg-brand-gray border border-white/5 animate-on-scroll fade-up delay-${(index % 3) * 100}`}
              >
                <div className="h-64 overflow-hidden relative">
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-xl font-heading font-bold text-white uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                      <p className="text-brand-yellow text-sm uppercase tracking-widest mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.client}</p>
                      <button className="border border-white text-white px-6 py-2 text-xs font-bold uppercase hover:bg-white hover:text-brand-dark transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        View Details
                      </button>
                   </div>
                </div>
                <div className="p-6 bg-brand-gray border-t border-white/5">
                   <h3 className="text-lg font-bold text-white uppercase mb-4 truncate">{project.title}</h3>
                   <div className="flex justify-between text-sm text-gray-400">
                     <div className="flex items-center gap-2">
                       <MapPin size={14} className="text-brand-yellow" />
                       <span>{project.location}</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <Calendar size={14} className="text-brand-yellow" />
                       <span>{project.year}</span>
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
              <p className="text-brand-dark/80 font-medium">We have the expertise to deliver beyond expectations.</p>
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