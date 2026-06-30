'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    monthlyBill: '',
    roofAge: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request:', formData);
    alert('Thank you! We will contact you within 24 hours with your free quote.');
  };

  return (
    <section id="contact" className="section-padding bg-brand-navy">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="text-white">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Get Your Free Solar Quote
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Ready to start saving? Fill out the form and our solar experts will 
              provide a custom quote within 24 hours. No obligations, no pressure.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center bg-brand-gold/20 rounded-full text-brand-gold">
                  \ud83d\udcde
                </span>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <a href="tel:8454441915" className="font-semibold hover:text-brand-gold transition-colors">
                    (845) 444-1915
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center bg-brand-gold/20 rounded-full text-brand-gold">
                  \u2709\ufe0f
                </span>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a href="mailto:tolin@solarstars.net" className="font-semibold hover:text-brand-gold transition-colors">
                    tolin@solarstars.net
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center bg-brand-gold/20 rounded-full text-brand-gold">
                  \ud83d\udd50
                </span>
                <div>
                  <p className="text-sm text-gray-400">Business Hours</p>
                  <p className="font-semibold">Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-sm text-gray-300">
                <span className="text-brand-green font-bold">\u2713 Free consultation</span> &mdash; No cost, 
                no commitment. Our experts will assess your home and provide a transparent quote 
                with all costs and savings clearly explained.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            {/* Step indicators */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-brand-gold' : 'bg-gray-200'}`} />
              <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-brand-gold' : 'bg-gray-200'}`} />
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-brand-navy mb-2">Your Information</h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Home Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-primary w-full"
                  >
                    Next Step \u2192
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-brand-navy mb-2">Property Details</h3>
                  <select
                    name="monthlyBill"
                    value={formData.monthlyBill}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    required
                  >
                    <option value="">Average Monthly Bill</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-300">$200 - $300</option>
                    <option value="300-500">$300 - $500</option>
                    <option value="500+">$500+</option>
                  </select>
                  <select
                    name="roofAge"
                    value={formData.roofAge}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  >
                    <option value="">Roof Age (Optional)</option>
                    <option value="0-5">0-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10-20">10-20 years</option>
                    <option value="20+">20+ years</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Any additional questions or notes? (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent resize-none"
                  />
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary flex-1"
                    >
                      \u2190 Back
                    </button>
                    <button type="submit" className="btn-primary flex-1">
                      Get My Free Quote
                    </button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
