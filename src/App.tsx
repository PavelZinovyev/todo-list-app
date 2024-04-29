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

const rootUrl = `${process.env.NODE_ENV === 'production' ? '/todo-list-app/' : '/'}`; // gh-pages hack

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

  const handleRemoveTodo = (id: number) => {
    const copyTodos = [...todo];

    const remainingTodos = copyTodos.filter((todo) => todo.id !== id);

    setTodos(remainingTodos);
  };

  const handleChangeTodo = (id: number) => {
    const copy = [...todo];
    const currentTodo = copy.find((todo) => todo.id === id);

    if (currentTodo) {
      currentTodo!.isCompleted = !currentTodo!.isCompleted;
      setTodos(copy);
    }
  };

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Tasks
                onRemoveTodo={handleRemoveTodo}
                onChangeTodo={handleChangeTodo}
                todosData={todo}
              />
            }
          />
          <Route
            path={`${rootUrl}tasks`}
            element={
              <Tasks
                onRemoveTodo={handleRemoveTodo}
                onChangeTodo={handleChangeTodo}
                todosData={todo}
              />
            }
          />
          <Route
            path={`${rootUrl}create-task`}
            element={<CreateTask onAddTodo={handleAddTodo} todosData={todo} />}
          />
          <Route path={`${rootUrl}history`} element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
