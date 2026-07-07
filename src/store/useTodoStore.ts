import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Todo, Category, Filter } from '../types/todo';

interface TodoStore {
  todos: Todo[];
  categories: Category[];
  filter: Filter;
  
  // Todo actions
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTodo: (id: string, updates: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
  
  // Category actions
  addCategory: (category: Omit<Category, 'id'>) => void;
  deleteCategory: (id: string) => void;
  
  // Filter actions
  setFilter: (filter: Partial<Filter>) => void;
  resetFilter: () => void;
  
  // Search and sort
  searchTodos: (query: string) => Todo[];
  getSortedTodos: () => Todo[];
  getStats: () => any;
}

const defaultCategories: Category[] = [
  { id: '1', name: 'Work', color: '#3B82F6', icon: '💼' },
  { id: '2', name: 'Personal', color: '#8B5CF6', icon: '👤' },
  { id: '3', name: 'Shopping', color: '#EC4899', icon: '🛍️' },
  { id: '4', name: 'Health', color: '#10B981', icon: '💪' },
  { id: '5', name: 'Learning', color: '#F59E0B', icon: '📚' },
];

const defaultFilter: Filter = {
  priority: 'all',
  status: 'all',
  category: 'all',
  search: '',
};

export const useTodoStore = create<TodoStore>(
  persist(
    (set, get) => ({
      todos: [],
      categories: defaultCategories,
      filter: defaultFilter,

      addTodo: (todo) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              ...todo,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          ],
        })),

      updateTodo: (id, updates) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, ...updates, updatedAt: new Date().toISOString() }
              : todo
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: !todo.completed, updatedAt: new Date().toISOString() }
              : todo
          ),
        })),

      clearCompleted: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        })),

      addCategory: (category) =>
        set((state) => ({
          categories: [
            ...state.categories,
            { ...category, id: Date.now().toString() },
          ],
        })),

      deleteCategory: (id) =>
        set((state) => ({
          categories: state.categories.filter((cat) => cat.id !== id),
        })),

      setFilter: (filter) =>
        set((state) => ({
          filter: { ...state.filter, ...filter },
        })),

      resetFilter: () =>
        set(() => ({
          filter: defaultFilter,
        })),

      searchTodos: (query) => {
        const state = get();
        if (!query) return state.todos;
        return state.todos.filter(
          (todo) =>
            todo.title.toLowerCase().includes(query.toLowerCase()) ||
            todo.description.toLowerCase().includes(query.toLowerCase()) ||
            todo.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
        );
      },

      getSortedTodos: () => {
        const state = get();
        let filtered = [...state.todos];

        // Apply search
        if (state.filter.search) {
          filtered = filtered.filter(
            (todo) =>
              todo.title.toLowerCase().includes(state.filter.search.toLowerCase()) ||
              todo.description.toLowerCase().includes(state.filter.search.toLowerCase())
          );
        }

        // Apply status filter
        if (state.filter.status === 'completed') {
          filtered = filtered.filter((todo) => todo.completed);
        } else if (state.filter.status === 'pending') {
          filtered = filtered.filter((todo) => !todo.completed);
        }

        // Apply priority filter
        if (state.filter.priority !== 'all') {
          filtered = filtered.filter((todo) => todo.priority === state.filter.priority);
        }

        // Apply category filter
        if (state.filter.category !== 'all') {
          filtered = filtered.filter((todo) => todo.category === state.filter.category);
        }

        // Sort by priority and due date
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return filtered.sort((a, b) => {
          if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
          }
          if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          }
          if (a.dueDate && b.dueDate) {
            return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
          }
          return 0;
        });
      },

      getStats: () => {
        const state = get();
        const total = state.todos.length;
        const completed = state.todos.filter((todo) => todo.completed).length;
        const pending = total - completed;
        const highPriority = state.todos.filter(
          (todo) => todo.priority === 'high' && !todo.completed
        ).length;

        return { total, completed, pending, highPriority };
      },
    }),
    {
      name: 'todo-store',
    }
  )
);
