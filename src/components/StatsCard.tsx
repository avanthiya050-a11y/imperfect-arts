import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, ListTodo, Zap } from 'lucide-react';
import { Stats } from '../types/todo';

interface StatsCardProps {
  stats: Stats;
}

export const StatsCard = ({ stats }: StatsCardProps) => {
  const statItems = [
    { icon: ListTodo, label: 'Total', value: stats.total, color: 'bg-blue-50 text-blue-600' },
    { icon: CheckCircle2, label: 'Completed', value: stats.completed, color: 'bg-green-50 text-green-600' },
    { icon: AlertCircle, label: 'Pending', value: stats.pending, color: 'bg-yellow-50 text-yellow-600' },
    { icon: Zap, label: 'High Priority', value: stats.highPriority, color: 'bg-red-50 text-red-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`${item.color} rounded-lg p-4 text-center`}
          >
            <Icon className="w-6 h-6 mx-auto mb-2" />
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="text-xs font-medium">{item.label}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
