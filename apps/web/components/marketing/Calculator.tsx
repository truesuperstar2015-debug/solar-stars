'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function Calculator() {
  const [monthlyBill, setMonthlyBill] = useState(150);
  const [roofType, setRoofType] = useState('asphalt');
  const [sunExposure, setSunExposure] = useState('full');

  const calculateSavings = () => {
    const baseMultiplier = sunExposure === 'full' ? 0.7 : sunExposure === 'partial' ? 0.5 : 0.3;
    const roofFactor = roofType === 'asphalt' ? 1 : roofType === 'metal' ? 1.05 : 0.95;
    const monthlySavings = Math.round(monthlyBill * baseMultiplier * roofFactor);
    const annualSavings = monthlySavings * 12;
    const twentyYearSavings = annualSavings * 25;
    const systemSize = Math.round((monthlyBill / 15) * 10) / 10;

    return { monthlySavings, annualSavings, twentyYearSavings, systemSize };
  };

  const savings = calculateSavings();

  return (
    <section id="calculator" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Solar Savings Calculator
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how much you could save by switching to solar. Adjust the sliders 
            below for a personalized estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Inputs */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Electric Bill: <span className="text-brand-gold font-bold">${monthlyBill}</span>
              </label>
              <input
                type="range"
                min={50}
                max={500}
                step={10}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$50</span>
                <span>$500</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Roof Type</label>
              <div className="grid grid-cols-3 gap-2">
                {['asphalt', 'metal', 'tile'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setRoofType(type)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium capitalize transition-all ${
                      roofType === type
                        ? 'bg-brand-navy text-white'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-navy'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sun Exposure</label>
              <div className="grid grid-cols-3 gap-2">
                {['full', 'partial', 'limited'].map((exposure) => (
                  <button
                    key={exposure}
                    onClick={() => setSunExposure(exposure)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium capitalize transition-all ${
                      sunExposure === exposure
                        ? 'bg-brand-navy text-white'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-navy'
                    }`}
                  >
                    {exposure}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <motion.div
            key={`${monthlyBill}-${roofType}-${sunExposure}`}
            initial={{ opacity: 0.8, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="bg-brand-navy rounded-2xl p-8 text-white">
              <h3 className="text-lg font-medium mb-6">Your Estimated Savings</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-brand-gold">${savings.monthlySavings}/mo</p>
                  <p className="text-sm text-gray-300">Monthly Savings</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-brand-green">${savings.annualSavings.toLocaleString()}/yr</p>
                  <p className="text-sm text-gray-300">Annual Savings</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">${savings.twentyYearSavings.toLocaleString()}</p>
                  <p className="text-sm text-gray-300">25-Year Savings</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">{savings.systemSize} kW</p>
                  <p className="text-sm text-gray-300">Recommended System</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary block text-center text-lg w-full">
              Get Your Exact Quote &mdash; It&apos;s Free
            </a>
            <p className="text-xs text-gray-500 text-center">
              * Estimates based on average solar production in your region. Actual savings may vary.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
