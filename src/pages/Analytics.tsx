import { motion } from 'framer-motion';
import { useTodoStore } from '../store/useTodoStore';
import { BarChart3, TrendingUp, Calendar, AlertCircle } from 'lucide-react';
import { isToday, isTomorrow, isThisWeek, parseISO } from 'date-fns';

export const Analytics = () => {
  const { todos } = useTodoStore();

  const calculateMetrics = () => {
    const totalTodos = todos.length;
    const completedTodos = todos.filter((t) => t.completed).length;
    const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

    const todayTodos = todos.filter(
      (t) => t.dueDate && isToday(parseISO(t.dueDate))
    ).length;
    const tomorrowTodos = todos.filter(
      (t) => t.dueDate && isTomorrow(parseISO(t.dueDate))
    ).length;
    const weekTodos = todos.filter(
      (t) => t.dueDate && isThisWeek(parseISO(t.dueDate))
    ).length;

    const priorityCounts = {
      high: todos.filter((t) => t.priority === 'high' && !t.completed).length,
      medium: todos.filter((t) => t.priority === 'medium' && !t.completed).length,
      low: todos.filter((t) => t.priority === 'low' && !t.completed).length,
    };

    return {
      totalTodos,
      completedTodos,
      completionRate,
      todayTodos,
      tomorrowTodos,
      weekTodos,
      priorityCounts,
    };
  };

  const metrics = calculateMetrics();

  const MetricCard = ({ icon: Icon, label, value, subtext, color }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg p-6 shadow-md"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} />
        </div>
      </div>
      <p className="text-gray-600 text-sm font-medium mb-1">{label}</p>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        {subtext && <span className="text-sm text-gray-500 mb-1">{subtext}</span>}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Overview */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BarChart3 size={28} />
          Analytics Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            icon={TrendingUp}
            label="Total Todos"
            value={metrics.totalTodos}
            color="bg-blue-100 text-blue-600"
          />
          <MetricCard
            icon={TrendingUp}
            label="Completed"
            value={metrics.completedTodos}
            subtext={`${metrics.completionRate}%`}
            color="bg-green-100 text-green-600"
          />
          <MetricCard
            icon={AlertCircle}
            label="High Priority"
            value={metrics.priorityCounts.high}
            color="bg-red-100 text-red-600"
          />
          <MetricCard
            icon={Calendar}
            label="Completion Rate"
            value={`${metrics.completionRate}%`}
            color="bg-purple-100 text-purple-600"
          />
        </div>
      </div>

      {/* Due Dates */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Due Dates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
          >
            <p className="text-sm text-gray-600 mb-1">Today</p>
            <p className="text-3xl font-bold text-blue-600">{metrics.todayTodos}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500"
          >
            <p className="text-sm text-gray-600 mb-1">Tomorrow</p>
            <p className="text-3xl font-bold text-orange-600">{metrics.tomorrowTodos}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500"
          >
            <p className="text-sm text-gray-600 mb-1">This Week</p>
            <p className="text-3xl font-bold text-purple-600">{metrics.weekTodos}</p>
          </motion.div>
        </div>
      </div>

      {/* Priority Distribution */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Priority Distribution</h3>
        <div className="space-y-4">
          {[
            {
              label: 'High Priority',
              count: metrics.priorityCounts.high,
              color: 'bg-red-500',
              lightColor: 'bg-red-100',
            },
            {
              label: 'Medium Priority',
              count: metrics.priorityCounts.medium,
              color: 'bg-yellow-500',
              lightColor: 'bg-yellow-100',
            },
            {
              label: 'Low Priority',
              count: metrics.priorityCounts.low,
              color: 'bg-green-500',
              lightColor: 'bg-green-100',
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-700">{item.label}</span>
                <span className="text-sm font-bold text-gray-600">{item.count}</span>
              </div>
              <div className={`h-3 ${item.lightColor} rounded-full overflow-hidden`}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(item.count / Math.max(...Object.values(metrics.priorityCounts))) * 100 || 0}%`,
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`h-full ${item.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
