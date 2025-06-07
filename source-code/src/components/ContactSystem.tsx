import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

emailjs.init("U4VwuKH7mY9SqD7HK"); // Replace with your EmailJS public key

const ContactSystem = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetRanges = [
    '$1K - $5K',
    '$5K - $15K',
    '$15K - $50K',
    '$50K+',
    'Let\'s discuss'
  ];

  const projectTypes = [
    'Landing Page',
    'Business Website',
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'Custom Solution'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS integration
      const result = await emailjs.send(
        'service_s8c23tag54jhb90s', // Replace with your EmailJS service ID
        'template_svxt62f', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          project_type: formData.project,
          budget_range: formData.budget,
          urgency: formData.urgency,
          message: formData.message,
          to_email: 'palanceroot@gmail.com'
        }
      );

      if (result.status === 200) {
        toast.success('Message sent successfully! I\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          company: '',
          project: '',
          budget: '',
          message: '',
          urgency: 'normal'
        });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact directly.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi NK! I'm interested in discussing a ${formData.project || 'project'}. My budget range is ${formData.budget || 'flexible'}. Let's connect!`
    );
    window.open(`https://wa.me/+918695205637?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-matrix-green mb-4 font-hacker">
            INITIATE_CONTACT.EXE
          </h2>
          <p className="text-matrix-green/70">Ready to bring your ideas to life? Let's connect!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-matrix-green mb-4">Quick Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-matrix-green" />
                  <div>
                    <div className="text-matrix-green font-semibold">Email</div>
                    <div className="text-matrix-green/70 text-sm">palanceroot@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-matrix-green" />
                  <div>
                    <div className="text-matrix-green font-semibold">WhatsApp</div>
                    <div className="text-matrix-green/70 text-sm">+91 86952 05637</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageSquare size={20} className="text-matrix-green" />
                  <div>
                    <div className="text-matrix-green font-semibold">Response Time</div>
                    <div className="text-matrix-green/70 text-sm">Within 4-6 hours</div>
                  </div>
                </div>
              </div>

              <button
                onClick={openWhatsApp}
                className="w-full mt-6 bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare size={20} />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-matrix-green mb-4">Availability Status</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-matrix-green rounded-full animate-pulse"></div>
                <span className="text-matrix-green">Available for new projects</span>
              </div>
              <div className="text-matrix-green/70 text-sm">
                Currently accepting 2-3 new clients for Q1 2024
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-matrix-green mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-matrix-black border border-matrix-green/30 rounded p-3 text-matrix-green focus:border-matrix-green focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-matrix-green mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-matrix-black border border-matrix-green/30 rounded p-3 text-matrix-green focus:border-matrix-green focus:outline-none"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-matrix-green mb-2">Company/Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-matrix-black border border-matrix-green/30 rounded p-3 text-matrix-green focus:border-matrix-green focus:outline-none"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-matrix-green mb-2">Project Type</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full bg-matrix-black border border-matrix-green/30 rounded p-3 text-matrix-green focus:border-matrix-green focus:outline-none"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-matrix-green mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-matrix-black border border-matrix-green/30 rounded p-3 text-matrix-green focus:border-matrix-green focus:outline-none"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-matrix-green mb-2">Urgency</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full bg-matrix-black border border-matrix-green/30 rounded p-3 text-matrix-green focus:border-matrix-green focus:outline-none"
                    >
                      <option value="normal">Normal (1-2 weeks to start)</option>
                      <option value="urgent">Urgent (Within 1 week)</option>
                      <option value="asap">ASAP (Within 2-3 days)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-matrix-green mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-matrix-black border border-matrix-green/30 rounded p-3 text-matrix-green focus:border-matrix-green focus:outline-none resize-none"
                    placeholder="Describe your project requirements, goals, and any specific technical needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-matrix-green text-matrix-black py-3 rounded font-bold hover:bg-matrix-darkGreen transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-matrix-black"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Project Brief</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Success/Error Messages */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-matrix-green/70">
            <CheckCircle size={16} />
            <span>All communications are secure and confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSystem;