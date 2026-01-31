import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const subject = encodeURIComponent(`[Contact Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:services@mohantyandsons.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Contact</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">
            Get In <span className="text-brand-yellow">Touch</span>
          </h1>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Phone size={32} />, title: "Phone Support", info: "9437343739, 6265566349, 9040413865", sub: "Mon-Sat 9am - 6pm" },
              { icon: <Mail size={32} />, title: "Email Us", info: "services@mohantyandsons.com", sub: "Online Support 24/7" },
              { icon: <Clock size={32} />, title: "Working Hours", info: "Mon - Sat: 09:00 - 18:00", sub: "Sunday Closed" }
            ].map((item, i) => (
              <div key={i} className="bg-brand-gray p-8 border border-white/5 hover:border-brand-yellow transition-all duration-300 text-center group">
                 <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow mx-auto mb-6 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                   {item.icon}
                 </div>
                 <h3 className="text-xl font-heading font-bold text-white mb-2 uppercase">{item.title}</h3>
                 <p className="text-white font-medium text-sm">{item.info}</p>
                 <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">
            {/* Map Placeholder */}
            <div className="h-[500px] w-full bg-gray-800 rounded-sm overflow-hidden relative border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.41029815041!2d85.75041151640625!3d20.296058699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1709424846752!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-brand-dark p-4 border border-white/10 shadow-xl">
                 <div className="flex items-center gap-2 text-brand-yellow font-bold uppercase text-sm">
                   <MapPin size={16} />
                   <span>HQ Location</span>
                 </div>
                 <p className="text-white text-xs mt-1">Bhubaneswar Industrial Estate</p>
              </div>
            </div>

            {/* Reuse Contact Form Component but remove its own container padding/margins if needed, 
                or just use it as is since it's section-based. 
                Actually ContactForm.tsx is a full section. 
                Let's create a simplified form here or reuse the component.
                Reusing the component creates a double section background.
                I will create a custom form layout for this page to look better.
            */}
            <div className="mt-12 lg:mt-0">
               <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">Send us a Message</h2>
               <p className="text-gray-400 mb-8">Have a question or need a consultation? Fill out the form below and our team will get back to you shortly.</p>
               
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white font-bold uppercase text-xs tracking-wider">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-brand-gray border p-4 text-white outline-none focus:border-brand-yellow transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`} 
                        placeholder="John Doe" 
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-white font-bold uppercase text-xs tracking-wider">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-brand-gray border p-4 text-white outline-none focus:border-brand-yellow transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`} 
                        placeholder="email@example.com" 
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white font-bold uppercase text-xs tracking-wider">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-brand-gray border p-4 text-white outline-none focus:border-brand-yellow transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10'}`} 
                        placeholder="+91 ..." 
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-white font-bold uppercase text-xs tracking-wider">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full bg-brand-gray border p-4 text-white outline-none focus:border-brand-yellow transition-colors ${errors.subject ? 'border-red-500' : 'border-white/10'}`} 
                        placeholder="Project Inquiry" 
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white font-bold uppercase text-xs tracking-wider">Message</label>
                    <textarea 
                      rows={6} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full bg-brand-gray border p-4 text-white outline-none focus:border-brand-yellow transition-colors ${errors.message ? 'border-red-500' : 'border-white/10'}`} 
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  
                  <button type="submit" className="bg-brand-yellow text-brand-dark px-10 py-4 font-bold uppercase tracking-wide hover:bg-white transition-all shadow-[0_0_20px_rgba(212,240,56,0.3)]">
                    Send Message
                  </button>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
