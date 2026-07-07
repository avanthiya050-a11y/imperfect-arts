import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { SAMPLE_PRODUCTS } from '../data/mockData';
import { useStore } from '../store/useStore';
import { CustomOrderSection } from '../components/CustomOrderSection';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = SAMPLE_PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some((item) => item.id === product?.id);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Added ${quantity} item(s) to cart!`);
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen bg-cream py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        >
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-beige rounded-3xl overflow-hidden h-96 md:h-full relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <button
                onClick={handleWishlist}
                className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-beige transition-colors"
              >
                <Heart
                  size={24}
                  className={isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-brown'}
                />
              </button>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-6">
              <span className="text-sm font-medium text-brown mb-2 inline-block">{product.collection}</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(product.rating) ? 'fill-gold' : 'fill-beige'}
                    />
                  ))}
                </div>
                <span className="text-text-light">({product.reviews} reviews)</span>
              </div>

              <div className="bg-beige rounded-2xl p-6 mb-8">
                <div className="text-4xl font-serif font-bold text-brown mb-2">₹{product.price}</div>
                <p className="text-sm text-text-light">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
              </div>

              <p className="text-lg text-text-light mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium text-text">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="input-field w-24 py-2"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="w-full btn-secondary py-4">
                  Order Now
                </button>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-beige">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-text-light mb-1">Collection</p>
                    <p className="font-medium text-text">{product.collection}</p>
                  </div>
                  <div>
                    <p className="text-text-light mb-1">Category</p>
                    <p className="font-medium text-text">{product.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex gap-8 border-b-2 border-beige mb-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 font-serif font-bold text-lg transition-colors ${
                activeTab === 'description'
                  ? 'text-brown border-b-4 border-brown -mb-2'
                  : 'text-text-light hover:text-text'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 font-serif font-bold text-lg transition-colors ${
                activeTab === 'reviews'
                  ? 'text-brown border-b-4 border-brown -mb-2'
                  : 'text-text-light hover:text-text'
              }`}
            >
              Reviews
            </button>
          </div>

          {activeTab === 'description' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose max-w-none">
              <p className="text-text-light leading-relaxed mb-6">
                {product.description}
              </p>
              <h3 className="text-xl font-serif font-bold text-text mb-4">Care Instructions</h3>
              <ul className="text-text-light space-y-2 list-disc list-inside">
                <li>Handle with care - each piece is handmade and unique</li>
                <li>Clean with soft, damp cloth only</li>
                <li>Keep away from direct sunlight for prolonged periods</li>
                <li>Store in a cool, dry place</li>
              </ul>
            </motion.div>
          )}

          {activeTab === 'reviews' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="bg-ivory rounded-2xl p-6">
                <h3 className="font-serif font-bold text-lg text-text mb-4">Customer Reviews</h3>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="mb-6 pb-6 border-b border-beige last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-text-light italic mb-2">
                      "Absolutely beautiful and well-crafted. Exceeded expectations!"
                    </p>
                    <p className="text-sm font-medium text-text">Anonymous Customer</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Custom Order Section */}
        <CustomOrderSection productId={product.id} />
      </div>
    </div>
  );
};
