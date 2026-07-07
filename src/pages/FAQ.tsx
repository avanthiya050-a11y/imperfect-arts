import { motion } from 'framer-motion';
import { FAQS } from '../data/mockData';

export const FAQ = () => {
  return (
    <div className="min-h-screen bg-cream py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-subtitle">Find answers to common questions</p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.details
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-ivory rounded-2xl cursor-pointer group card-shadow"
            >
              <summary className="font-serif font-bold text-lg text-text flex items-center justify-between select-none p-6 hover:bg-beige transition-colors rounded-2xl">
                {faq.question}
                <span className="group-open:rotate-180 transition-transform text-brown">▼</span>
              </summary>
              <div className="px-6 pb-6 text-text-light leading-relaxed">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </div>
  );
};
