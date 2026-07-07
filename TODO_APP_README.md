# TaskFlow - To-Do List Application

A modern, feature-rich to-do list application built with React, TypeScript, and Tailwind CSS. Complete with local storage functionality, analytics, and category management.

## ✨ Features

### Core Features
- ✅ **Create & Manage Todos** - Add, edit, and delete todos with ease
- 🏷️ **Categories** - Organize todos into custom categories with icons and colors
- 🎯 **Priority Levels** - Mark todos as High, Medium, or Low priority
- 📅 **Due Dates** - Set due dates and get alerts for overdue tasks
- 🏷️ **Tags** - Add multiple tags to organize todos by topic
- 🔍 **Search & Filter** - Find todos quickly with powerful search and filtering
- 💾 **Local Storage** - All data persists in your browser

### Additional Features
- 📊 **Analytics Dashboard** - View statistics about your productivity
- 🎨 **Beautiful UI** - Modern, responsive design with smooth animations
- 📱 **Mobile Responsive** - Works perfectly on all devices
- ⚡ **Fast & Smooth** - Optimized performance with Framer Motion animations
- 🎯 **Smart Sorting** - Todos automatically sorted by priority and due date
- 🧹 **Bulk Actions** - Clear all completed todos at once

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - State management with local storage persistence
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **date-fns** - Date manipulation and formatting
- **Vite** - Fast build tool and dev server

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📋 Project Structure

```
src/
├── components/
│   ├── AddTodoModal.tsx      # Modal for adding/editing todos
│   ├── FilterBar.tsx         # Filter and search component
│   ├── StatsCard.tsx         # Statistics display component
│   └── TodoItem.tsx          # Individual todo item component
├── pages/
│   ├── TodoApp.tsx           # Main todo list page
│   ├── CategoryManager.tsx   # Category management page
│   ├── Analytics.tsx         # Analytics dashboard page
│   └── Help.tsx              # Help and tips page
├── store/
│   └── useTodoStore.ts       # Zustand store with local storage
├── types/
│   └── todo.ts               # TypeScript type definitions
├── utils/
│   └── dateUtils.ts          # Date formatting utilities
├── App.tsx                   # Main app component
├── main.tsx                  # React entry point
└── index.css                 # Global styles
```

## 🎨 Features in Detail

### Todo Management
- Create todos with title, description, priority, category, and due date
- Edit existing todos
- Mark todos as complete/incomplete
- Delete individual todos
- Clear all completed todos

### Categories
- Create custom categories with names, colors, and icons
- Organize todos by category
- Delete categories
- Default categories: Work, Personal, Shopping, Health, Learning

### Analytics
- View total todos, completed, and pending counts
- Track high-priority pending tasks
- Monitor completion rate
- Upcoming due dates (Today, Tomorrow, This Week)
- Priority distribution charts

### Filtering & Search
- Search by todo title, description, or tags
- Filter by status (All, Pending, Completed)
- Filter by priority (High, Medium, Low)
- Filter by category
- Multiple filters can be applied simultaneously

## 🎯 Usage Tips

1. **Start with Categories** - Set up categories that match your workflow
2. **Use Priorities** - Mark high-priority tasks to stay focused
3. **Set Due Dates** - Keep track of deadlines
4. **Add Tags** - Use tags for better organization
5. **Check Analytics** - Review your productivity metrics
6. **Regular Cleanup** - Clear completed todos to keep your list fresh

## 💾 Local Storage

All your todos and categories are automatically saved to your browser's local storage:
- Persists across browser sessions
- Private - data stays on your device
- No internet required
- Limited by browser storage quota (~5-10MB)

## 🔄 Future Enhancements

- [ ] Export/Import todos (JSON/CSV)
- [ ] Recurring todos
- [ ] Todo templates
- [ ] Dark mode
- [ ] Notifications
- [ ] Collaboration features
- [ ] Cloud sync
- [ ] Mobile app

## 🐛 Known Limitations

- Data is stored locally in the browser and won't sync across devices
- Limited storage capacity (depends on browser)
- No built-in backup mechanism

## 📝 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📞 Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

**Made with ❤️ by the TaskFlow Team**

Stay productive and organized! ✓
