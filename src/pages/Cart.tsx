import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

export const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream py-12 px-4 md:px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="section-title">Shopping Cart</h1>
          <p className="text-text-light mb-8 mt-4">Your cart is empty</p>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
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
          <h1 className="section-title">Shopping Cart</h1>
          <p className="section-subtitle">{cart.length} item(s) in cart</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-ivory rounded-3xl p-6 flex gap-6 card-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-lg text-text mb-2">{item.name}</h3>
                    <p className="text-text-light text-sm mb-4">{item.collection}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-serif font-bold text-brown">₹{item.price}</div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateCartQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="bg-beige hover:bg-sage-light rounded-full p-2 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="bg-beige hover:bg-sage-light rounded-full p-2 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-rose-500 hover:text-rose-700 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-ivory rounded-3xl p-8 card-shadow sticky top-20">
              <h3 className="font-serif font-bold text-2xl text-text mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6 pb-6 border-b-2 border-beige">
                <div className="flex justify-between text-text-light">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-text-light">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-text-light">
                  <span>Tax</span>
                  <span>₹{Math.round(total * 0.12)}</span>
                </div>
              </div>
              <div className="flex justify-between font-serif font-bold text-2xl text-brown mb-8">
                <span>Total</span>
                <span>₹{total + Math.round(total * 0.12)}</span>
              </div>
              <Link to="/checkout" className="btn-primary w-full text-center block">
                Proceed to Checkout
              </Link>
              <Link to="/shop" className="btn-secondary w-full text-center block mt-3">
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
