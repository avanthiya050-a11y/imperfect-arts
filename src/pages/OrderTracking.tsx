import { motion } from 'framer-motion';
import { useState } from 'react';

export const OrderTracking = () => {
  const [searchType, setSearchType] = useState<'phone' | 'orderId'>('phone');
  const [searchValue, setSearchValue] = useState('');
  const [tracked, setTracked] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setTracked(true);
    }
  };

  return (
    <div className="min-h-screen bg-cream py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Track Your Order</h1>
          <p className="section-subtitle">Enter your phone number or order ID to track your shipment</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSearch}
          className="bg-ivory rounded-3xl card-shadow p-8 mb-12"
        >
          <div className="flex gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="phone"
                checked={searchType === 'phone'}
                onChange={() => setSearchType('phone')}
              />
              <span className="text-text">Search by Phone Number</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="orderId"
                checked={searchType === 'orderId'}
                onChange={() => setSearchType('orderId')}
              />
              <span className="text-text">Search by Order ID</span>
            </label>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder={searchType === 'phone' ? 'Enter your phone number' : 'Enter your order ID'}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="input-field flex-1"
              required
            />
            <button type="submit" className="btn-primary px-8">
              Track Order
            </button>
          </div>
        </motion.form>

        {tracked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-ivory rounded-3xl p-8 card-shadow">
              <h2 className="font-serif font-bold text-2xl text-text mb-6">Order Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-text-light text-sm mb-1">Order ID</p>
                  <p className="font-serif font-bold text-text text-lg">ORD-1234567890</p>
                </div>
                <div>
                  <p className="text-text-light text-sm mb-1">Order Date</p>
                  <p className="font-serif font-bold text-text text-lg">July 7, 2024</p>
                </div>
                <div>
                  <p className="text-text-light text-sm mb-1">Status</p>
                  <p className="font-serif font-bold text-text text-lg text-green-600">Shipped</p>
                </div>
                <div>
                  <p className="text-text-light text-sm mb-1">Total Amount</p>
                  <p className="font-serif font-bold text-text text-lg">₹4,999</p>
                </div>
              </div>
            </div>

            <div className="bg-ivory rounded-3xl p-8 card-shadow">
              <h2 className="font-serif font-bold text-2xl text-text mb-8">Shipment Timeline</h2>
              <div className="space-y-6">
                {[
                  { status: 'Order Confirmed', date: 'Jul 7, 2024', completed: true },
                  { status: 'Payment Received', date: 'Jul 7, 2024', completed: true },
                  { status: 'Preparing Order', date: 'Jul 8, 2024', completed: true },
                  { status: 'Shipped', date: 'Jul 9, 2024', completed: true },
                  { status: 'Out for Delivery', date: 'Jul 10, 2024', completed: false },
                  { status: 'Delivered', date: 'Expected: Jul 11, 2024', completed: false },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                      step.completed ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      {step.completed ? '✓' : index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-text">{step.status}</p>
                      <p className="text-sm text-text-light">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
