import { motion } from 'framer-motion';
import { useTodoStore } from '../store/useTodoStore';
import { Palette, Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { Category } from '../types/todo';

export const CategoryManager = () => {
  const { categories, addCategory, deleteCategory } = useTodoStore();
  const [isOpen, setIsOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', color: '#3B82F6', icon: '🏷️' });

  const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444'];
  const icons = ['🏷️', '📌', '⭐', '🎯', '📝', '💡', '📚', '🎨', '🚀', '🎉'];

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.name.trim()) {
      addCategory({
        name: newCategory.name,
        color: newCategory.color,
        icon: newCategory.icon,
      });
      setNewCategory({ name: '', color: '#3B82F6', icon: '🏷️' });
      setIsOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Palette size={24} />
          Categories
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      {isOpen && (
        <motion.form
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleAddCategory}
          className="mb-6 p-4 bg-gray-50 rounded-lg space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              value={newCategory.name}
              onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              placeholder="e.g., Urgent, Projects"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color
            </label>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setNewCategory({ ...newCategory, color })}
                  className={`w-10 h-10 rounded-lg transition-transform ${
                    newCategory.color === color ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' : ''
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Icon
            </label>
            <div className="flex flex-wrap gap-2">
              {icons.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setNewCategory({ ...newCategory, icon })}
                  className={`text-2xl p-2 rounded-lg transition-all ${
                    newCategory.icon === icon ? 'bg-blue-100 ring-2 ring-blue-500' : 'hover:bg-gray-200'
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Create Category
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </motion.form>
      )}

      {/* Category List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-lg transition-all group"
            style={{ backgroundColor: `${category.color}20`, borderLeft: `4px solid ${category.color}` }}
          >
            <div className="flex items-start justify-between">
              <div className="text-3xl mb-2">{category.icon}</div>
              <button
                onClick={() => deleteCategory(category.id)}
                className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <h3 className="font-semibold text-gray-900">{category.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
