import { useState } from 'react';
import TodoItem from './todoItem/TodoItem';
import styles from './task.module.scss';
import { FC } from 'react';

interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TasksProps {
  todosData: ITodo[];
}

const Tasks: FC<TasksProps> = ({ todosData }) => {
  const [todos, setTodos] = useState(todosData);

  const handleChangeTodo = (id: number) => {
    const copy = [...todos];
    const currentTodo = copy.find((todo) => todo.id === id);

    if (currentTodo) {
      currentTodo!.isCompleted = !currentTodo!.isCompleted;
      setTodos(copy);
    }
  };

  const handleRemoveTodo = (id: number) => {
    const copyTodos = [...todos];
    setTodos(copyTodos.filter((todo) => todo.id !== id));
  };

  const reversedTodos = [...todos].reverse();

  return (
    <div className={styles.tasks}>
      {reversedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={handleRemoveTodo}
          onChangeTodo={handleChangeTodo}
        />
      ))}
    </div>
  );
};

export default Tasks;
