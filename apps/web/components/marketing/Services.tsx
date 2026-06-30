'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '\ud83c\udfe0',
    title: 'Residential Solar',
    description: 'Custom-designed solar systems for your home. Reduce or eliminate your electricity bills with panels tailored to your roof and energy needs.',
    features: ['Custom system design', 'Roof assessment included', 'Net metering setup'],
  },
  {
    icon: '\ud83c\udfe2',
    title: 'Commercial Solar',
    description: 'Large-scale solar solutions for businesses. Lower operating costs, earn tax credits, and demonstrate environmental leadership.',
    features: ['ROI analysis', 'Tax incentive guidance', 'Scalable systems'],
  },
  {
    icon: '\ud83d\udd0b',
    title: 'Battery Storage',
    description: 'Store excess solar energy for use at night or during outages. Achieve true energy independence with integrated battery systems.',
    features: ['Backup power', 'Peak shaving', 'Smart energy management'],
  },
  {
    icon: '\ud83d\udd27',
    title: 'Maintenance & Monitoring',
    description: 'Keep your system performing at peak efficiency with our comprehensive monitoring and maintenance plans.',
    features: ['24/7 monitoring', 'Annual inspections', 'Performance guarantees'],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Our Solar Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From initial consultation to installation and beyond, Solar Stars provides 
            end-to-end solar energy solutions for every need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <span className="text-4xl block mb-4">{service.icon}</span>
              <h3 className="font-heading text-xl font-semibold text-brand-navy mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="text-brand-green text-xs">\u25cf</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
