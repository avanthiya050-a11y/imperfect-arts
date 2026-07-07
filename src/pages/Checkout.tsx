import { motion } from 'framer-motion';
import { useState } from 'react';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const { cart, clearCart } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
    paymentMethod: 'upi',
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(total * 0.12);
  const finalTotal = total + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = `ORD-${Date.now()}`;
    alert(`Order placed successfully!\nOrder ID: ${orderId}\nTotal: ₹${finalTotal}\n\nYou can track your order using your phone number or order ID.`);
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream py-12 px-4 md:px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="section-title">Checkout</h1>
          <p className="text-text-light mb-8 mt-4">Your cart is empty. Add items to proceed.</p>
          <Link to="/shop" className="btn-primary">Continue Shopping</Link>
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
          <h1 className="section-title">Checkout</h1>
          <p className="section-subtitle">Complete your order</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-ivory rounded-3xl p-8 card-shadow">
              <h2 className="font-serif font-bold text-2xl text-text mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="input-field mt-4"
                required
              />
            </div>

            <div className="bg-ivory rounded-3xl p-8 card-shadow">
              <h2 className="font-serif font-bold text-2xl text-text mb-6">Shipping Address</h2>
              <input
                type="text"
                name="street"
                placeholder="Street Address"
                value={formData.street}
                onChange={handleChange}
                className="input-field mb-4"
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State/Province"
                  value={formData.state}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="input-field"
              >
                <option value="India">India</option>
              </select>
            </div>

            <div className="bg-ivory rounded-3xl p-8 card-shadow">
              <h2 className="font-serif font-bold text-2xl text-text mb-6">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                  />
                  <span className="text-text">UPI</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank_transfer"
                    checked={formData.paymentMethod === 'bank_transfer'}
                    onChange={handleChange}
                  />
                  <span className="text-text">Bank Transfer</span>
                </label>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-4">
              Place Order
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-ivory rounded-3xl p-8 card-shadow sticky top-20">
              <h2 className="font-serif font-bold text-2xl text-text mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b-2 border-beige max-h-80 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium text-text">{item.name}</p>
                      <p className="text-text-light text-xs">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-text">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b-2 border-beige">
                <div className="flex justify-between text-text-light">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-text-light">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-text-light">
                  <span>Tax (12%)</span>
                  <span>₹{tax}</span>
                </div>
              </div>

              <div className="flex justify-between font-serif font-bold text-2xl text-brown">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
