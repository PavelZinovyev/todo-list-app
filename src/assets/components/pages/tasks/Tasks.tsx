import TodoItem from './todoItem/TodoItem';
import styles from './task.module.scss';
import { FC } from 'react';

interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface RemoveTodo {
  onRemoveTodo: (id: number) => void;
}

interface ChangeTodo {
  onChangeTodo: (id: number) => void;
}

interface TasksProps extends RemoveTodo, ChangeTodo {
  todosData: ITodo[];
}

const Tasks: FC<TasksProps> = ({ todosData, onRemoveTodo, onChangeTodo }) => {
  const reversedTodos = [...todosData].reverse();

  return (
    <div className={styles.tasks}>
      {reversedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onChangeTodo={onChangeTodo}
        />
      ))}
    </div>
  );
};

export default Tasks;
