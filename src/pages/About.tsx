import { motion } from 'framer-motion';
import { Heart, Users, Gift, Leaf } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-cream via-ivory to-beige">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="section-title">About Imperfect Arts</h1>
            <p className="section-subtitle">Celebrating the beauty of handmade, one piece at a time</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop"
              alt="Artisan at work"
              className="rounded-3xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-text mb-6">Our Story</h2>
            <p className="text-text-light leading-relaxed mb-4">
              Imperfect Arts was born from a passion for handmade creations and a desire to celebrate the beauty in imperfection. We believe that true artistry lies not in perfection, but in the passion and care poured into each piece.
            </p>
            <p className="text-text-light leading-relaxed mb-4">
              Founded in Bengaluru, our journey began as a small initiative to support local artisans and bring unique, handcrafted products directly to customers who appreciate authenticity and craftsmanship.
            </p>
            <p className="text-text-light leading-relaxed">
              Today, Imperfect Arts is a thriving community of artisans, creators, and customers united by the love of handmade goods and sustainable practices.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">What drives us every day</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: 'Passion', description: 'Every piece is crafted with love and dedication' },
            { icon: Users, title: 'Community', description: 'We support local artisans and creators' },
            { icon: Leaf, title: 'Sustainability', description: 'Eco-friendly materials and practices' },
            { icon: Gift, title: 'Quality', description: 'Premium handmade products that last' },
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ivory rounded-3xl p-8 card-shadow text-center"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-brown" />
                <h3 className="font-serif font-bold text-xl text-text mb-3">{value.title}</h3>
                <p className="text-text-light text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto bg-beige/50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Talented artisans and creators behind every piece</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Clay Artisan', 'Resin Artist', 'Embroidery Master', 'Floral Designer'].map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-brown to-sage shadow-lg"></div>
              <p className="font-serif font-bold text-text text-lg">{role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ivory rounded-3xl p-12 card-shadow text-center"
        >
          <h2 className="font-serif font-bold text-3xl text-text mb-6">Our Mission</h2>
          <p className="text-lg text-text-light leading-relaxed">
            To create a thriving marketplace where artisans can showcase their talents, customers can discover authentic handmade products, and everyone celebrates the beauty of craftsmanship. We believe in creating meaningful connections between creators and art lovers.
          </p>
        </motion.div>
      </section>
    </div>
  );
};
