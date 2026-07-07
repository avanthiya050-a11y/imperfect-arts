import { motion } from 'framer-motion';
import { SAMPLE_PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { useState } from 'react';

export const Shop = () => {
  const [selectedCollection, setSelectedCollection] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  const collections = Array.from(new Set(SAMPLE_PRODUCTS.map(p => p.collection)));
  const filteredProducts = selectedCollection
    ? SAMPLE_PRODUCTS.filter(p => p.collection === selectedCollection)
    : SAMPLE_PRODUCTS;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-cream py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Shop</h1>
          <p className="section-subtitle">Discover our complete collection of handmade products</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64"
          >
            <div className="bg-ivory rounded-3xl p-6 card-shadow sticky top-20">
              <h3 className="font-serif font-bold text-lg text-text mb-4">Filter by Collection</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCollection('')}
                  className={`block w-full text-left px-4 py-2 rounded-full transition-colors ${
                    !selectedCollection
                      ? 'bg-brown text-white'
                      : 'bg-beige text-text hover:bg-sage-light'
                  }`}
                >
                  All Products
                </button>
                {collections.map(collection => (
                  <button
                    key={collection}
                    onClick={() => setSelectedCollection(collection)}
                    className={`block w-full text-left px-4 py-2 rounded-full transition-colors ${
                      selectedCollection === collection
                        ? 'bg-brown text-white'
                        : 'bg-beige text-text hover:bg-sage-light'
                    }`}
                  >
                    {collection}
                  </button>
                ))}
              </div>

              <h3 className="font-serif font-bold text-lg text-text mb-4 mt-8">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field w-full"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <div className="mb-4 text-sm text-text-light">
              Showing {sortedProducts.length} products
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product, index) => (
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
    </div>
  );
};
