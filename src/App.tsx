import { motion } from 'framer-motion';
import { LayoutList, Settings, HelpCircle, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { TodoApp } from './pages/TodoApp';
import { CategoryManager } from './pages/CategoryManager';
import { Analytics } from './pages/Analytics';
import { Help } from './pages/Help';

type TabType = 'todos' | 'categories' | 'analytics' | 'help';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('todos');

  const tabs = [
    { id: 'todos' as const, label: 'Todos', icon: LayoutList },
    { id: 'categories' as const, label: 'Categories', icon: Settings },
    { id: 'analytics' as const, label: 'Analytics', icon: BarChart3 },
    { id: 'help' as const, label: 'Help', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="text-2xl">✓</div>
              <span className="text-xl font-bold text-gray-900">TaskFlow</span>
            </div>
            <div className="flex gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                    <span className="hidden md:inline">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'todos' && <TodoApp />}
          {activeTab === 'categories' && (
            <div className="py-8 px-4 md:px-6">
              <CategoryManager />
            </div>
          )}
          {activeTab === 'analytics' && (
            <div className="py-8 px-4 md:px-6">
              <Analytics />
            </div>
          )}
          {activeTab === 'help' && (
            <div className="py-8 px-4 md:px-6">
              <Help />
            </div>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p>✓ TaskFlow - Stay Productive & Organized | © 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
