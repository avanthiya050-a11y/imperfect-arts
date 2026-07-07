import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COLLECTIONS, SAMPLE_PRODUCTS, REVIEWS, FAQS } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const bestSellers = SAMPLE_PRODUCTS.slice(0, 6);
  const featuredProducts = SAMPLE_PRODUCTS.slice(6, 12);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-cream via-ivory to-beige overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-sage rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <motion.div className="flex items-center gap-2 mb-6" whileHover={{ x: 10 }}>
              <Sparkles size={20} className="text-gold" />
              <span className="text-brown font-medium">Welcome to Imperfect Arts</span>
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-text mb-6 leading-tight">
              Handmade <span className="text-gradient">Perfection</span>
            </h1>
            <p className="text-xl text-text-light mb-8 max-w-lg">
              Discover unique, artisan-crafted gifts and premium handmade products. Each piece tells a story of passion and creativity.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/shop" className="btn-primary flex items-center gap-2">
                Start Shopping
                <ArrowRight size={18} />
              </Link>
              <Link to="/collections" className="btn-secondary">
                Explore Collections
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop"
              alt="Handmade Art"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Shop by Collections */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Shop by Collections</h2>
          <p className="section-subtitle">Explore our curated collections of unique handmade items</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {COLLECTIONS.slice(0, 6).map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/collections/${collection.name}`} className="group">
                <div className="relative h-64 rounded-3xl overflow-hidden card-shadow mb-4">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-serif font-bold text-white">{collection.name}</h3>
                      <p className="text-white/80 text-sm mt-2">{collection.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/collections" className="btn-primary">
            View All Collections
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto bg-beige/50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">Customer favorites and top-rated products</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Latest additions to our premium collection</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">What makes Imperfect Arts special</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Artisan Quality',
              description: 'Each piece is handcrafted with meticulous attention to detail and passion.'
            },
            {
              title: 'Unique & Original',
              description: 'No mass production. Every item is one-of-a-kind with its own character.'
            },
            {
              title: 'Eco-Friendly',
              description: 'We use sustainable materials and minimal packaging to protect our planet.'
            },
            {
              title: 'Custom Orders',
              description: 'Want something special? We create custom pieces tailored to your vision.'
            },
            {
              title: 'Fast Delivery',
              description: 'Quick shipping within Bengaluru and across India with order tracking.'
            },
            {
              title: 'Customer Care',
              description: 'Exceptional support and satisfaction guaranteed on every purchase.'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-ivory rounded-3xl p-8 card-shadow text-center"
            >
              <h3 className="text-xl font-serif font-bold text-text mb-3">{item.title}</h3>
              <p className="text-text-light text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto bg-beige/50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Customer Reviews</h2>
          <p className="section-subtitle">What our happy customers say</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 card-shadow"
            >
              <div className="flex items-center gap-1 mb-3 text-gold">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-text-light mb-4 text-sm italic">"{review.comment}"</p>
              <p className="font-serif font-bold text-text">{review.customerName}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.slice(0, 4).map((faq, index) => (
            <motion.details
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-ivory rounded-2xl p-6 cursor-pointer group"
            >
              <summary className="font-serif font-bold text-text flex items-center justify-between select-none">
                {faq.question}
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-text-light mt-4 text-sm">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/faq" className="btn-primary">
            View All FAQs
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sage to-brown rounded-3xl p-12 text-white text-center card-shadow"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/90 mb-8">Get exclusive offers, new product launches, and creative tips delivered to your inbox.</p>
          <div className="flex gap-3 max-w-md mx-auto flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/20 border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:border-white/80"
            />
            <button className="bg-gold text-brown font-medium px-8 py-3 rounded-full hover:bg-gold-light transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
