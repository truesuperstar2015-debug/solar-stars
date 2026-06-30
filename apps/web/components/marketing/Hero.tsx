'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-brand-gold blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-brand-green blur-3xl" />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-gold/20 text-brand-gold rounded-full text-sm font-medium mb-6">
              \u2600\ufe0f Trusted Solar Energy Provider
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Power Your Home with{' '}
              <span className="text-brand-gold">Solar Stars</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Cut your energy bills by up to 70%. Join thousands of homeowners 
              who have switched to clean, affordable solar energy with Solar Stars.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="btn-primary text-center text-lg">
                Get Your Free Quote
              </a>
              <a href="#calculator" className="btn-secondary text-center text-lg border border-white/20">
                Calculate Savings
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 items-center text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-brand-green">\u2713</span> Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <span className="text-brand-green">\u2713</span> 25-Year Warranty
              </span>
              <span className="flex items-center gap-2">
                <span className="text-brand-green">\u2713</span> $0 Down Options
              </span>
            </div>
          </motion.div>

          {/* Right: Stats / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-3xl font-bold text-brand-gold">2,500+</p>
                <p className="text-gray-300 text-sm mt-1">Systems Installed</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-3xl font-bold text-brand-green">70%</p>
                <p className="text-gray-300 text-sm mt-1">Avg. Bill Savings</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-3xl font-bold text-white">4.9\u2605</p>
                <p className="text-gray-300 text-sm mt-1">Customer Rating</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-gray-300 text-sm mt-1">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
