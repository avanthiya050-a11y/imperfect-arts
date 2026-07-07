import { motion } from 'framer-motion';
import { Plus, Trash2, Settings } from 'lucide-react';
import { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';
import { TodoItem } from '../components/TodoItem';
import { AddTodoModal } from '../components/AddTodoModal';
import { FilterBar } from '../components/FilterBar';
import { StatsCard } from '../components/StatsCard';
import { Todo } from '../types/todo';

export const TodoApp = () => {
  const {
    todos,
    categories,
    filter,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted,
    setFilter,
    resetFilter,
    getSortedTodos,
    getStats,
  } = useTodoStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const sortedTodos = getSortedTodos();
  const stats = getStats();

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTodo(null);
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">TaskFlow</h1>
              <p className="text-blue-100">Stay productive and organized</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Plus size={20} />
              Add Todo
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div className="mb-8">
          <StatsCard stats={stats} />
        </motion.div>

        {/* Filters */}
        <FilterBar
          filter={filter}
          categories={categories}
          onFilterChange={setFilter}
          onReset={resetFilter}
        />

        {/* Todos List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 space-y-3"
        >
          {sortedTodos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {todos.length === 0 ? 'No todos yet!' : 'All caught up!'}
              </h3>
              <p className="text-gray-600">
                {todos.length === 0
                  ? 'Create your first todo to get started.'
                  : 'All your todos are done or filtered out.'}
              </p>
            </motion.div>
          ) : (
            sortedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                categories={categories}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={handleEdit}
              />
            ))
          )}
        </motion.div>

        {/* Action Buttons */}
        {stats.completed > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button
              onClick={clearCompleted}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={16} />
              Clear Completed ({stats.completed})
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AddTodoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAdd={addTodo}
        onUpdate={updateTodo}
        categories={categories}
        editingTodo={editingTodo}
      />
    </div>
  );
};
