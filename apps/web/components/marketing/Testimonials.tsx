'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Maria Rodriguez',
    location: 'Hudson Valley, NY',
    quote: 'Solar Stars made the entire process seamless. Our electric bill went from $280/month to just $35. The team was professional and the installation was completed ahead of schedule.',
    rating: 5,
    savings: '87%',
  },
  {
    name: 'James & Patricia Chen',
    location: 'Rockland County, NY',
    quote: 'We were skeptical at first, but the savings calculator was spot-on. After 8 months, we\'ve already saved over $2,000. Highly recommend Solar Stars!',
    rating: 5,
    savings: '72%',
  },
  {
    name: 'Robert Thompson',
    location: 'Orange County, NY',
    quote: 'The customer portal makes it so easy to track our system\'s performance. We can see exactly how much energy we\'re producing and saving in real time.',
    rating: 5,
    savings: '65%',
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied homeowners who have made the switch to solar with Solar Stars.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-brand-gold">\u2605</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="font-semibold text-brand-navy text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
                <span className="bg-brand-green/10 text-brand-green text-xs font-bold px-2 py-1 rounded-full">
                  {testimonial.savings} saved
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
