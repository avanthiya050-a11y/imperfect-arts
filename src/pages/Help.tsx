import { motion } from 'framer-motion';
import { Calendar, Lightbulb, Clock, Zap } from 'lucide-react';

const tips = [
  {
    icon: Calendar,
    title: 'Set Due Dates',
    description: 'Assign due dates to your todos to stay on track and never miss important deadlines.',
  },
  {
    icon: Zap,
    title: 'Prioritize Tasks',
    description: 'Mark tasks as High, Medium, or Low priority to focus on what matters most.',
  },
  {
    icon: Clock,
    title: 'Review Regularly',
    description: 'Check your dashboard daily to review your tasks and adjust priorities as needed.',
  },
  {
    icon: Lightbulb,
    title: 'Use Categories',
    description: 'Organize your todos into categories like Work, Personal, and Shopping for better organization.',
  },
];

export const Help = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* FAQ */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Where are my todos stored?',
              a: 'Your todos are stored locally in your browser using browser storage. This means your data is private and persists even after you close the browser.',
            },
            {
              q: 'Can I access my todos on another device?',
              a: 'Currently, todos are stored locally on each device. To sync across devices, you would need to export and import your data or use a cloud-based solution.',
            },
            {
              q: 'How do I back up my todos?',
              a: 'You can export your todos as JSON or CSV format and save them to your computer for backup purposes.',
            },
            {
              q: 'Can I delete individual todos?',
              a: 'Yes! You can delete individual todos by clicking the delete button on each todo item, or clear all completed todos at once.',
            },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Productivity Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100"
              >
                <Icon className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Keyboard Shortcuts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: 'A', description: 'Add new todo' },
            { key: 'F', description: 'Focus search' },
            { key: 'C', description: 'Clear completed' },
            { key: 'R', description: 'Reset filters' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <kbd className="px-3 py-1 bg-gray-900 text-white rounded font-mono text-sm font-bold">
                Ctrl+{item.key}
              </kbd>
              <span className="text-gray-700">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
