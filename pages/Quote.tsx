import React, { useState } from 'react';
import { ChevronRight, Upload, Calendar } from 'lucide-react';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectDescription?: string;
}

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedBudget: string;
  projectDescription: string;
  expectedStartDate: string;
  siteLocation: string;
}

const Quote: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: 'Structural Steel Fabrication',
    estimatedBudget: '',
    projectDescription: '',
    expectedStartDate: '',
    siteLocation: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    } else if (formData.projectDescription.trim().length < 20) {
      newErrors.projectDescription = 'Project description must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    const subject = encodeURIComponent(`[Quote Request] ${formData.projectType} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Quote Request Details\n` +
      `====================\n\n` +
      `CONTACT INFORMATION\n` +
      `Full Name: ${formData.fullName}\n` +
      `Company Name: ${formData.companyName || 'Not provided'}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `PROJECT DETAILS\n` +
      `Project Type: ${formData.projectType}\n` +
      `Estimated Budget: ${formData.estimatedBudget || 'Not provided'}\n` +
      `Expected Start Date: ${formData.expectedStartDate || 'Not provided'}\n` +
      `Site Location: ${formData.siteLocation || 'Not provided'}\n\n` +
      `PROJECT DESCRIPTION\n` +
      `${formData.projectDescription}`
    );

    window.location.href = `mailto:services@mohantyandsons.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581093588402-41141199a041?q=80&w=2070&auto=format&fit=crop" 
            alt="Engineering Blueprint" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Get Quote</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">
            Request A <span className="text-brand-yellow">Quote</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            Provide us with your project details and estimation requirements. Our engineering team will analyze your needs and provide a comprehensive proposal.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-brand-gray border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Section 1: Contact Info */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="w-8 h-8 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center text-sm">1</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full bg-brand-dark border p-4 text-white outline-none focus:border-brand-yellow transition-colors ${errors.fullName ? 'border-red-500' : 'border-white/10'}`}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-brand-dark border p-4 text-white outline-none focus:border-brand-brand-yellow transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-brand-dark border p-4 text-white outline-none focus:border-brand-yellow transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Section 2: Project Details */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="w-8 h-8 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center text-sm">2</span>
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors appearance-none cursor-pointer"
                    >
                      <option>Structural Steel Fabrication</option>
                      <option>Industrial Shed/Warehouse</option>
                      <option>Pre-Engineered Building (PEB)</option>
                      <option>Piping & Utility</option>
                      <option>Civil Construction</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Estimated Budget (Optional)</label>
                    <input
                      type="text"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleInputChange}
                      className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors"
                      placeholder="₹"
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <label className="text-gray-400 text-sm">Project Description & Requirements *</label>
                  <textarea
                    rows={5}
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    className={`w-full bg-brand-dark border p-4 text-white outline-none focus:border-brand-yellow transition-colors ${errors.projectDescription ? 'border-red-500' : 'border-white/10'}`}
                    placeholder="Please describe the scope, dimensions, location, and specific requirements..."
                  ></textarea>
                  {errors.projectDescription && <p className="text-red-500 text-xs mt-1">{errors.projectDescription}</p>}
                </div>
              </div>

              {/* Section 3: Timeline & Files */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="w-8 h-8 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center text-sm">3</span>
                  Timeline & Attachments
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Expected Start Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="expectedStartDate"
                        value={formData.expectedStartDate}
                        onChange={handleInputChange}
                        className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors"
                      />
                      <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Site Location</label>
                     <input
                       type="text"
                       name="siteLocation"
                       value={formData.siteLocation}
                       onChange={handleInputChange}
                       className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors"
                       placeholder="City, State"
                     />
                  </div>
                </div>

                <div className="border-2 border-dashed border-white/20 rounded-sm p-8 text-center hover:border-brand-yellow transition-colors cursor-pointer bg-brand-dark/50">
                  <Upload className="mx-auto text-brand-yellow mb-4" size={32} />
                  <p className="text-white font-medium mb-1">Upload Project Files (PDF, CAD, Images)</p>
                  <p className="text-gray-500 text-sm">Drag & drop or click to browse (Max 25MB)</p>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full md:w-auto bg-brand-yellow text-brand-dark px-12 py-5 font-bold uppercase tracking-wide hover:bg-white transition-all shadow-[0_0_20px_rgba(212,240,56,0.3)] text-lg">
                  Submit Request
                </button>
                <p className="text-gray-500 text-xs mt-4 text-center md:text-left">
                  By submitting this form, you agree to our privacy policy and allow our team to contact you regarding this inquiry.
                </p>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;