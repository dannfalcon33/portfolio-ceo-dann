import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      // Reset status after a delay
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full content-center">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <div>
            <span className="text-xs tracking-[0.3em] text-luxury-gray uppercase block mb-4">Inquiries</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none text-luxury-white">
              Let's start a <br/>
              <span className="italic font-light opacity-80">dialogue</span>.
            </h2>
          </div>
          
          <p className="font-sans text-sm md:text-base text-luxury-gray leading-loose max-w-md text-justify">
            I am available to hear proposals for work, projects, and other opportunities. Please write to me to arrange a meeting.
          </p>

          <div className="pt-8 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-luxury-gray block">Direct Email</span>
            <a href="mailto:yoshuasoto54@gmail.com" className="font-serif text-2xl text-luxury-white hover:text-luxury-gray transition-colors duration-300">
              yoshuasoto54@gmail.com
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pl-12">
           <form onSubmit={handleSubmit} className="space-y-12 w-full max-w-lg mx-auto lg:mx-0">
              
              <div className="relative group">
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-luxury-border-strong py-4 text-xl font-serif text-luxury-white focus:outline-none focus:border-luxury-white transition-colors duration-500 placeholder-transparent peer"
                  placeholder="Your Name"
                />
                <label className="absolute left-0 top-4 text-luxury-gray text-xs uppercase tracking-widest transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-placeholder-shown:top-4 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                  Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-luxury-border-strong py-4 text-xl font-serif text-luxury-white focus:outline-none focus:border-luxury-white transition-colors duration-500 placeholder-transparent peer"
                  placeholder="Email Address"
                />
                <label className="absolute left-0 top-4 text-luxury-gray text-xs uppercase tracking-widest transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-placeholder-shown:top-4 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                  Email
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  name="message"
                  required
                  rows={3}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-luxury-border-strong py-4 text-xl font-serif text-luxury-white focus:outline-none focus:border-luxury-white transition-colors duration-500 placeholder-transparent peer resize-none"
                  placeholder="Message"
                />
                <label className="absolute left-0 top-4 text-luxury-gray text-xs uppercase tracking-widest transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-placeholder-shown:top-4 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                  Message
                </label>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'success'}
                  className="group relative w-full md:w-auto px-12 py-4 border border-luxury-border-strong hover:border-luxury-white transition-colors duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 text-xs tracking-[0.25em] uppercase text-luxury-white mix-blend-difference">
                    {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
                  </span>
                  {status === 'idle' && (
                    <div className="absolute top-0 left-0 h-full w-0 bg-luxury-white group-hover:w-full transition-all duration-500 ease-out z-0"></div>
                  )}
                </button>
              </div>
           </form>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Contact;