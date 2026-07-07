import { motion } from 'framer-motion';
import { BarChart3, Users, Package, TrendingUp, DollarSign, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'products' | 'customers'>('overview');

  const stats = [
    { label: 'Total Revenue', value: '₹4,85,600', icon: DollarSign, trend: '+12.5%' },
    { label: 'Total Orders', value: '486', icon: Package, trend: '+8.2%' },
    { label: 'Active Customers', value: '2,430', icon: Users, trend: '+5.1%' },
    { label: 'This Month', value: '₹1,24,500', icon: TrendingUp, trend: '+23.1%' },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'Priya Sharma', amount: '₹4,999', status: 'Delivered', date: 'Jul 7' },
    { id: 'ORD-002', customer: 'Rajesh Kumar', amount: '₹7,499', status: 'Shipped', date: 'Jul 6' },
    { id: 'ORD-003', customer: 'Anjali Desai', amount: '₹2,199', status: 'Preparing', date: 'Jul 5' },
    { id: 'ORD-004', customer: 'Vikram Patel', amount: '₹9,999', status: 'Confirmed', date: 'Jul 4' },
    { id: 'ORD-005', customer: 'Divya Menon', amount: '₹5,499', status: 'Processing', date: 'Jul 3' },
  ];

  const topProducts = [
    { name: 'Clay Vase', sales: 124, revenue: '₹3,10,000' },
    { name: 'Resin Jewelry Box', sales: 98, revenue: '₹1,86,200' },
    { name: 'Embroidery Hoop Art', sales: 87, revenue: '₹1,13,100' },
    { name: 'Custom Portrait', sales: 56, revenue: '₹4,47,500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your business overview.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-green-600 text-sm font-medium">{stat.trend}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex gap-4 border-b border-gray-200">
            {['overview', 'orders', 'products', 'customers'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-3 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Recent Orders */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Orders</h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="font-medium text-gray-900">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.id} • {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{order.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-50 text-green-700'
                          : order.status === 'Shipped'
                          ? 'bg-blue-50 text-blue-700'
                          : order.status === 'Preparing'
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-gray-50 text-gray-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Top Products</h2>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm font-medium text-gray-900">{product.sales} sales</p>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(product.sales / 124) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{product.revenue}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Order ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Customer</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">{order.id}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{order.customer}</td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">{order.amount}</td>
                      <td className="py-3 px-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === 'Delivered'
                            ? 'bg-green-50 text-green-700'
                            : 'bg-blue-50 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'products' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Product Management</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add Product
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Product Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Collection</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Price</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Stock</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {['Clay Vase', 'Resin Box', 'Embroidery Art', 'Crochet Blanket'].map((product, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">{product}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">Artisan</td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">₹2,499</td>
                      <td className="py-3 px-4 text-sm text-gray-600">45 units</td>
                      <td className="py-3 px-4 text-sm">
                        <button className="text-blue-600 hover:text-blue-700 mr-4">Edit</button>
                        <button className="text-red-600 hover:text-red-700">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'customers' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Management</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Customer Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Phone</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Orders</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Total Spent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Priya Sharma', email: 'priya@email.com', phone: '98765 43210', orders: 5, spent: '₹24,999' },
                    { name: 'Rajesh Kumar', email: 'rajesh@email.com', phone: '87654 32109', orders: 3, spent: '₹12,500' },
                    { name: 'Anjali Desai', email: 'anjali@email.com', phone: '76543 21098', orders: 8, spent: '₹45,000' },
                  ].map((customer, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">{customer.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{customer.email}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{customer.phone}</td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">{customer.orders}</td>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">{customer.spent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
