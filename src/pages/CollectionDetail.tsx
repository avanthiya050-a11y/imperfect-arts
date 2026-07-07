import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { SAMPLE_PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { CustomOrderSection } from '../components/CustomOrderSection';

export const CollectionDetail = () => {
  const { name } = useParams<{ name: string }>();
  const products = SAMPLE_PRODUCTS.filter(p => p.collection === name);

  return (
    <div className="min-h-screen bg-cream py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">{name}</h1>
          <p className="section-subtitle">Handcrafted products from our {name} collection</p>
        </motion.div>

        <CustomOrderSection productId={''} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-serif font-bold text-text mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
