import React from 'react';
import { ChevronRight, Target, Shield, TrendingUp, Scale, Award, FileCheck, Building } from 'lucide-react';
import Team from '../components/Team';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
            alt="Factory Interior" 
            className="w-full h-full object-cover opacity-20 animate-on-scroll zoom-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center animate-on-scroll fade-up">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">
            Our <span className="text-brand-yellow">Legacy</span>
          </h1>
        </div>
      </section>

      {/* Company Background & Legacy */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll fade-right">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase leading-tight">
                Building Trust <br/> Since <span className="text-brand-yellow">1965</span>
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Mohanty & Sons Private Limited (MSPL) is a premier industrial fabrication and erection company based in Bhubaneswar, Odisha. With over 60 years of unwavering commitment to the industry, we have established ourselves as a key partner for heavy industries across the region.
                </p>
                <p>
                  As a registered Private Limited company, we operate as a specialized industrial contractor, taking up comprehensive project execution, fabrication, erection, and ongoing maintenance jobs. Our legacy is built on strong technical knowledge and long-term involvement in large-scale industrial projects for Steel, Cement, and Power sectors.
                </p>
                <p>
                   From humble beginnings to becoming a powerhouse in Eastern India, our journey reflects a dedication to engineering excellence and client satisfaction.
                </p>
                <div className="flex gap-8 pt-6">
                  <div className="animate-on-scroll fade-up delay-100">
                    <span className="text-4xl font-heading font-bold text-white block">60+</span>
                    <span className="text-sm uppercase tracking-wider text-brand-yellow">Years Active</span>
                  </div>
                  <div className="animate-on-scroll fade-up delay-200">
                    <span className="text-4xl font-heading font-bold text-white block">Odisha</span>
                    <span className="text-sm uppercase tracking-wider text-brand-yellow">Based HQ</span>
                  </div>
                  <div className="animate-on-scroll fade-up delay-300">
                    <span className="text-4xl font-heading font-bold text-white block">Pvt Ltd</span>
                    <span className="text-sm uppercase tracking-wider text-brand-yellow">Registered</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-on-scroll fade-left delay-200">
              <div className="border-2 border-brand-yellow/30 p-4 rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1565610222536-ef125c59da2c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Industrial Site" 
                  className="w-full h-auto rounded-sm filter brightness-90 hover:brightness-100 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-yellow text-brand-dark p-6 rounded-sm max-w-xs shadow-xl hidden md:block animate-on-scroll zoom-in delay-500">
                <p className="font-heading font-bold text-lg italic">"Strong technical knowledge backed by long-term involvement in large industrial projects."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-brand-dark border border-white/5 p-10 hover:border-brand-yellow/50 transition-all group relative overflow-hidden animate-on-scroll fade-up delay-100">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target size={120} />
               </div>
               <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow mb-6">
                 <Target size={32} />
               </div>
               <h3 className="text-3xl font-heading font-bold text-white uppercase mb-4">Our Mission</h3>
               <p className="text-gray-400 leading-relaxed relative z-10">
                 To engineer and fabricate world-class steel structures that define the skyline of tomorrow, while maintaining the highest standards of safety, quality, and sustainability for our clients and community. We aim to solve complex challenges with simple, robust engineering.
               </p>
            </div>
             <div className="bg-brand-dark border border-white/5 p-10 hover:border-brand-yellow/50 transition-all group relative overflow-hidden animate-on-scroll fade-up delay-300">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <TrendingUp size={120} />
               </div>
               <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow mb-6">
                 <TrendingUp size={32} />
               </div>
               <h3 className="text-3xl font-heading font-bold text-white uppercase mb-4">Our Vision</h3>
               <p className="text-gray-400 leading-relaxed relative z-10">
                 To be the undisputed leader in industrial steel manufacturing across Asia, recognized for our innovation, operational excellence, and commitment to building a stronger, safer, and more sustainable future for the generations to come.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality, Safety, Ethics */}
      <section className="py-20 bg-brand-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <h2 className="text-4xl font-heading font-bold text-white uppercase mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-gray p-10 border border-white/5 hover:border-brand-yellow transition-all duration-300 group text-center animate-on-scroll fade-up delay-100">
               <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award size={40} />
               </div>
               <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">Quality</h3>
               <p className="text-gray-400">
                  Strict adherence to ISO and ASTM standards. Every weld and structure undergoes rigorous testing to ensure durability and precision.
               </p>
            </div>

            <div className="bg-brand-gray p-10 border border-white/5 hover:border-brand-yellow transition-all duration-300 group text-center animate-on-scroll fade-up delay-200">
               <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield size={40} />
               </div>
               <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">Safety</h3>
               <p className="text-gray-400">
                  Zero-compromise safety policy. We prioritize the well-being of our workforce and the integrity of our installations on every site.
               </p>
            </div>

            <div className="bg-brand-gray p-10 border border-white/5 hover:border-brand-yellow transition-all duration-300 group text-center animate-on-scroll fade-up delay-300">
               <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Scale size={40} />
               </div>
               <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">Business Ethics</h3>
               <p className="text-gray-400">
                  We operate with transparency, integrity, and accountability. As a GST-registered Private Limited company, we ensure compliance and trust in all dealings.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Management */}
      <Team />

      {/* Certifications & Registrations */}
      <section className="py-20 bg-brand-gray border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <h2 className="text-4xl font-heading font-bold text-white uppercase mb-4">Certifications & <span className="text-brand-yellow">Compliance</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We are a fully compliant, registered entity operating under the laws of the Government of India.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GST Card */}
            <div className="bg-brand-dark p-8 border border-white/5 hover:border-brand-yellow/50 transition-all rounded-sm animate-on-scroll fade-up delay-100">
               <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-yellow">
                   <FileCheck size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-white uppercase">GST Registration</h3>
               </div>
               <div className="space-y-3 text-sm">
                 <p className="flex justify-between"><span className="text-gray-500">GSTIN:</span> <span className="text-white font-mono">21AASCM5279Q1ZK</span></p>
                 <p className="flex justify-between"><span className="text-gray-500">Type:</span> <span className="text-white">Regular</span></p>
                 <p className="flex justify-between"><span className="text-gray-500">Date:</span> <span className="text-white">08 November 2024</span></p>
                 <p className="flex justify-between"><span className="text-gray-500">State:</span> <span className="text-white">Odisha</span></p>
               </div>
            </div>

            {/* CIN Card */}
            <div className="bg-brand-dark p-8 border border-white/5 hover:border-brand-yellow/50 transition-all rounded-sm animate-on-scroll fade-up delay-200">
               <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-yellow">
                   <Building size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-white uppercase">Company Registration</h3>
               </div>
               <div className="space-y-3 text-sm">
                 <p className="flex justify-between"><span className="text-gray-500">CIN:</span> <span className="text-white font-mono text-xs">U42909OD2024PTC046867</span></p>
                 <p className="flex justify-between"><span className="text-gray-500">Name:</span> <span className="text-white">Mohanty & Sons Pvt. Ltd.</span></p>
                 <p className="flex justify-between"><span className="text-gray-500">Type:</span> <span className="text-white">Private Limited</span></p>
                 <p className="flex justify-between"><span className="text-gray-500">Authority:</span> <span className="text-white">MCA, Govt of India</span></p>
               </div>
            </div>

            {/* Compliance Card */}
            <div className="bg-brand-dark p-8 border border-white/5 hover:border-brand-yellow/50 transition-all rounded-sm animate-on-scroll fade-up delay-300">
               <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-yellow">
                   <Shield size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-white uppercase">Legal & Compliance</h3>
               </div>
               <ul className="space-y-3 text-sm text-gray-400 list-disc list-inside">
                 <li>Incorporated under Companies Act, 2013</li>
                 <li>Compliant with statutory tax regulations</li>
                 <li>Eligible for Govt. & Private vendor registration</li>
                 <li>Adherence to industrial safety norms</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;