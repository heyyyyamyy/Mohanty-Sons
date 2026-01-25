import React, { useState } from 'react';
import { 
  ChevronRight, Factory, Settings, Flame, Hammer, Truck, Ruler, 
  Building2, Zap, Anchor, HardHat, Plus, Minus, CheckCircle2, Globe,
  Wrench, Database, Wind, ArrowUpCircle, CloudOff
} from 'lucide-react';

const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const allServices = [
    {
      icon: <Hammer size={32} />,
      title: "Heavy, Medium & Light Fabrication",
      desc: "Precision fabrication of heavy columns, beams, and trusses, as well as medium and light engineering components tailored to project specifications.",
      image: "https://images.unsplash.com/photo-1535976868661-86927958f2da?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <ArrowUpCircle size={32} />,
      title: "Industrial Erection Works",
      desc: "Safe and efficient erection of plant machinery, structural steel, and technological structures using heavy-lift cranes and expert rigging teams.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Flame size={32} />,
      title: "Kiln & Cooler Installation",
      desc: "Specialized installation and alignment of Rotary Kilns, Coolers, and support rollers for Cement, Sponge Iron, and Alumina plants.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Settings size={32} />,
      title: "Conveyor System Installation",
      desc: "Complete erection of material handling systems including Belt Conveyors, Pipe Conveyors, and Bucket Elevators for raw material transport.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Zap size={32} />,
      title: "Boiler Works",
      desc: "Erection of high-pressure boilers, steam drums, and associated pressure parts for Power Plants and captive power units.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Wind size={32} />,
      title: "Gas Pipeline & Gas Producer Systems",
      desc: "Fabrication and laying of utility piping, gas producer plants, and high-pressure gas distribution networks.",
      image: "https://images.unsplash.com/photo-1503762687835-12997a9753a3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Factory size={32} />,
      title: "Structural Steel Works",
      desc: "End-to-end structural steel solutions including design, supply, fabrication, and erection for industrial sheds and technological structures.",
      image: "https://images.unsplash.com/photo-1565439303660-5f9c5d1445d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <CloudOff size={32} />,
      title: "ESP & Pollution Control Systems",
      desc: "Installation of Electrostatic Precipitators (ESP), bag filters, and fume extraction systems to meet environmental compliance.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Database size={32} />, // Using Database as it resembles a tank/cylinder
      title: "Tank & Equipment Fabrication",
      desc: "Manufacturing of storage tanks, silos, hoppers, and pressure vessels for water, fuel, and chemical storage applications.",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop"
    },
    {
      icon: <Wrench size={32} />,
      title: "Industrial Maintenance Services",
      desc: "Routine and shutdown maintenance services, equipment overhauling, and structural repairs to ensure uninterrupted plant operations.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  const industries = [
    { icon: <Flame size={32} />, name: "Steel Plants", desc: "Structural works, blast furnace maintenance." },
    { icon: <HardHat size={32} />, name: "Sponge Iron Plants", desc: "Conveyors, rotary kilns, maintenance." },
    { icon: <Building2 size={32} />, name: "Cement Plants", desc: "Kiln erection, cooler installation." },
    { icon: <Zap size={32} />, name: "Power Plants", desc: "Boiler erection, ESP systems, piping." },
    { icon: <Anchor size={32} />, name: "Refineries", desc: "Tankage, complex piping networks." },
    { icon: <Wrench size={32} />, name: "Heavy Engineering", desc: "Custom fabrication for specialized machinery." },
  ];

  const faqs = [
    { question: "Where are you based and where do you operate?", answer: "We are based in Bhubaneswar, Odisha. We execute projects across Odisha, West Bengal, Jharkhand, and neighboring regions for large industrial clients." },
    { question: "What acts as your primary area of expertise?", answer: "Our expertise lies in Heavy/Medium fabrication, erection of Kilns, Coolers, Boilers, and specialized maintenance for Steel and Cement plants." },
    { question: "Who are your major clients?", answer: "We have worked with Tata Projects (Vedanta Alumina), Jindal Steel & Power, UltraTech Cement, OCL India, MSP Sponge Iron, and Maithan Ispat among others." },
    { question: "Do you handle shutdown maintenance?", answer: "Yes, we are highly experienced in handling critical plant shutdowns and turnaround maintenance within tight schedules." },
    { question: "What is your legal entity status?", answer: "Mohanty & Sons is a registered Private Limited company (MSPL) with valid GST registration, operating as a regular taxpayer." },
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">
            Fabrication & <span className="text-brand-yellow">Erection</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className="group bg-brand-gray border border-white/5 overflow-hidden hover:border-brand-yellow/50 transition-all duration-300 rounded-sm">
                <div className="h-48 overflow-hidden relative">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-all"></div>
                </div>
                <div className="p-8 relative">
                   <div className="absolute -top-10 right-8 bg-brand-yellow text-brand-dark p-4 rounded-sm shadow-lg group-hover:scale-110 transition-transform">
                     {service.icon}
                   </div>
                   <h3 className="text-xl font-heading font-bold text-white mb-4 uppercase pr-8 mt-2">{service.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                   <a href="#" className="inline-flex items-center gap-2 text-brand-yellow font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all">
                     View Details <ChevronRight size={16} />
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-brand-gray border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white uppercase mb-4">Industries We Serve</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-start gap-6 p-6 border border-white/5 hover:bg-white/5 transition-colors group">
                <div className="text-brand-yellow group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white uppercase mb-2">{industry.name}</h3>
                  <p className="text-gray-400 text-sm">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-brand-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white uppercase mb-4">Our Work Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From project planning to final handover, we ensure safety and quality at every step.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { step: "01", title: "Planning", desc: "Detailed assessment of drawings and site conditions." },
               { step: "02", title: "Fabrication", desc: "Precision cutting and welding in our workshops or onsite." },
               { step: "03", title: "Erection", desc: "Safe lifting and installation of heavy equipment." },
               { step: "04", title: "Handover", desc: "Final testing, quality checks, and project handover." }
             ].map((item, i) => (
               <div key={i} className="relative p-6 border-l border-brand-yellow/30 md:border-l-0 md:border-t hover:bg-white/5 transition-colors">
                 <span className="text-6xl font-heading font-bold text-white/5 absolute top-4 right-4">{item.step}</span>
                 <h3 className="text-xl font-heading font-bold text-white mb-2 uppercase">{item.title}</h3>
                 <p className="text-gray-400 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-gray">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                 <div className="flex items-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
                    <CheckCircle2 size={16} />
                    <span>FAQ</span>
                 </div>
                 <h2 className="text-4xl font-heading font-bold text-white uppercase mb-6">Common <br/> Questions</h2>
                 <p className="text-gray-400 mb-8">
                    Find answers to the most frequently asked questions about our industrial services.
                 </p>
                 <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all">
                   Contact Us
                 </button>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                 {faqs.map((faq, index) => (
                   <div key={index} className="bg-brand-dark border border-white/5 rounded-sm overflow-hidden transition-all duration-300 hover:border-brand-yellow/30">
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <span className={`text-lg font-bold uppercase transition-colors ${openFaq === index ? 'text-brand-yellow' : 'text-white'}`}>
                          {faq.question}
                        </span>
                        {openFaq === index ? <Minus size={20} className="text-brand-yellow" /> : <Plus size={20} className="text-gray-500" />}
                      </button>
                      <div className={`px-6 pb-6 text-gray-400 leading-relaxed transition-all duration-300 ${openFaq === index ? 'block' : 'hidden'}`}>
                        {faq.answer}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;