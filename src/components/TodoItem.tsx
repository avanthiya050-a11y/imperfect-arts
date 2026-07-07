import { motion } from 'framer-motion';
import { Checkbox, Trash2, Edit2, Calendar, Tag, AlertCircle } from 'lucide-react';
import { Todo, Category } from '../types/todo';
import { formatDate, isOverdue, getPriorityIcon } from '../utils/dateUtils';
import clsx from 'clsx';

interface TodoItemProps {
  todo: Todo;
  categories: Category[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

export const TodoItem = ({
  todo,
  categories,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) => {
  const category = categories.find((cat) => cat.id === todo.category);
  const overdue = isOverdue(todo.dueDate, todo.completed);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ scale: 1.01 }}
      className={clsx(
        'group flex items-start gap-4 p-4 rounded-lg border-2 transition-all duration-200',
        todo.completed
          ? 'bg-gray-50 border-gray-200'
          : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
      )}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={clsx(
          'flex-shrink-0 mt-1 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all',
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 hover:border-green-500'
        )}
      >
        {todo.completed && <Checkbox size={16} className="text-white" />}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3
              className={clsx(
                'font-semibold text-sm md:text-base transition-all',
                todo.completed
                  ? 'text-gray-400 line-through'
                  : 'text-gray-900'
              )}
            >
              {todo.title}
            </h3>
            {todo.description && (
              <p
                className={clsx(
                  'text-sm mt-1',
                  todo.completed ? 'text-gray-300' : 'text-gray-600'
                )}
              >
                {todo.description}
              </p>
            )}
          </div>
          <span className="text-lg flex-shrink-0">{getPriorityIcon(todo.priority)}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-3">
          {category && (
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: category.color }}
            >
              {category.icon} {category.name}
            </span>
          )}

          {todo.dueDate && (
            <span
              className={clsx(
                'inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium',
                overdue
                  ? 'bg-red-100 text-red-700'
                  : 'bg-blue-100 text-blue-700'
              )}
            >
              <Calendar size={12} />
              {formatDate(todo.dueDate)}
              {overdue && <AlertCircle size={12} />}
            </span>
          )}

          {todo.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(todo)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          aria-label="Edit"
        >
          <Edit2 size={16} />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          aria-label="Delete"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </motion.div>
  );
};
