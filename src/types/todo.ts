export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate: string | null;
  category: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface Filter {
  priority: 'all' | 'low' | 'medium' | 'high';
  status: 'all' | 'completed' | 'pending';
  category: string | 'all';
  search: string;
}

export interface Stats {
  total: number;
  completed: number;
  pending: number;
  highPriority: number;
}
