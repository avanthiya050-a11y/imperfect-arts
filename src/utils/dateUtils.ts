import { format, parseISO, isToday, isTomorrow, isPast } from 'date-fns';

export const formatDate = (date: string | null): string => {
  if (!date) return 'No due date';
  try {
    const parsedDate = parseISO(date);
    if (isToday(parsedDate)) return 'Today';
    if (isTomorrow(parsedDate)) return 'Tomorrow';
    return format(parsedDate, 'MMM dd, yyyy');
  } catch {
    return 'Invalid date';
  }
};

export const isOverdue = (date: string | null, completed: boolean): boolean => {
  if (!date || completed) return false;
  try {
    return isPast(parseISO(date));
  } catch {
    return false;
  }
};

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'high':
      return '#EF4444';
    case 'medium':
      return '#F59E0B';
    case 'low':
      return '#10B981';
    default:
      return '#6B7280';
  }
};

export const getPriorityIcon = (priority: string): string => {
  switch (priority) {
    case 'high':
      return '🔴';
    case 'medium':
      return '🟡';
    case 'low':
      return '🟢';
    default:
      return '⚪';
  }
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
