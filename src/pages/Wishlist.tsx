import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';

export const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-cream py-12 px-4 md:px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="section-title">Wishlist</h1>
          <p className="text-text-light mb-8 mt-4">Your wishlist is empty</p>
          <Link to="/shop" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Wishlist</h1>
          <p className="section-subtitle">{wishlist.length} item(s) saved</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-ivory rounded-3xl overflow-hidden card-shadow"
            >
              <div className="h-64 bg-beige overflow-hidden relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-lg text-text mb-2">{item.name}</h3>
                <p className="text-text-light text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif font-bold text-brown">₹{item.price}</span>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-rose-500 hover:text-rose-700 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <button
                  onClick={() => {
                    addToCart(item, 1);
                    alert('Added to cart!');
                  }}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
