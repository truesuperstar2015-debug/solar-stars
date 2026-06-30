'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    icon: '\u26a1',
    title: 'Fast Installation',
    description: 'Most systems installed within 2-4 weeks from contract signing.',
  },
  {
    icon: '\ud83d\udcb0',
    title: '$0 Down Financing',
    description: 'Start saving immediately with flexible financing options and no upfront costs.',
  },
  {
    icon: '\ud83d\udee1\ufe0f',
    title: '25-Year Warranty',
    description: 'Industry-leading warranty covers panels, inverters, and workmanship.',
  },
  {
    icon: '\ud83d\udcca',
    title: 'Real-Time Monitoring',
    description: 'Track your system performance 24/7 through our customer portal and mobile app.',
  },
  {
    icon: '\ud83c\udf31',
    title: 'Environmental Impact',
    description: 'Every system offsets an average of 4 tons of CO2 annually.',
  },
  {
    icon: '\ud83e\udd1d',
    title: 'Local & Trusted',
    description: 'Locally owned, fully licensed, and serving your community for over 15 years.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Why Choose Solar Stars?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to making solar energy accessible, affordable, and hassle-free for every homeowner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">{reason.icon}</span>
              <div>
                <h3 className="font-heading font-semibold text-brand-navy mb-1">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
