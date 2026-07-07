import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COLLECTIONS, SAMPLE_PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { CustomOrderSection } from '../components/CustomOrderSection';

export const Collections = () => {
  return (
    <div className="min-h-screen bg-cream py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Collections</h1>
          <p className="section-subtitle">Explore our curated collections of handmade artisan products</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {COLLECTIONS.map((collection, index) => {
            const productCount = SAMPLE_PRODUCTS.filter(p => p.collection === collection.name).length;
            return (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/collections/${collection.name}`}>
                  <div className="bg-ivory rounded-3xl overflow-hidden card-shadow cursor-pointer">
                    <div className="h-80 overflow-hidden relative group">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-serif font-bold text-text mb-2">{collection.name}</h3>
                      <p className="text-text-light text-sm mb-4">{collection.description}</p>
                      <div className="text-xs font-medium text-brown">{productCount} Products</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
