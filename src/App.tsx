import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tasks from './assets/components/pages/tasks/Tasks';
import Layout from './assets/components/Layout/Layout';
import NotFound from './assets/components/pages/NotFound/NotFound';
import CreateTask from './assets/components/pages/CreateTask/CreateTask';
import History from './assets/components/pages/History/History';
import { useState } from 'react';

interface ITodoItem {
  id: number;
  title: string;
  isCompleted: boolean;
}

const initialTodoList: Array<ITodoItem> = [
  {
    id: 0,
    title: 'Team meeting',
    isCompleted: false,
  },
  {
    id: 1,
    title: 'Make a service schedule',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Buy flowers for mom',
    isCompleted: false,
  },
];

const App = () => {
  const [todo, setTodos] = useState(initialTodoList);

  const handleAddTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random(),
        title,
        isCompleted: false,
      },
    ]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path={`${process.env.NODE_ENV === 'production' ? '/todo-list-app/' : '/'}`}
          element={<Layout />}
        >
          <Route index element={<Tasks todosData={todo} />} />
          <Route path="create-task" element={<CreateTask onAddTodo={handleAddTodo} />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
