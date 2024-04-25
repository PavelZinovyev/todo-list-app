import styles from './createTask.module.scss';
import { useState, FC } from 'react';
import cn from 'classnames';

interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface AddTodo {
  onAddTodo: (title: string) => void;
}

interface ITaskProps extends AddTodo {
  todosData: ITodo[];
}

const CreateTask: FC<ITaskProps> = ({ onAddTodo, todosData }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  const fromattedTitle = title.trimStart();

  const handleEnterSetTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && fromattedTitle.length > 0) {
      const isTitleExist = todosData.find((todo) => todo.title === fromattedTitle);

      if (isTitleExist) {
        console.log('this title already exist, type another title');
        setError(true);
      } else {
        if (error) setError(false);
        onAddTodo(fromattedTitle);
        setTitle('');
      }
    }
  };

  const handleClickSetTodo = () => {
    if (fromattedTitle.length > 0) {
      const isTitleExist = todosData.find((todo) => todo.title === fromattedTitle);

      if (isTitleExist) {
        console.log('this title already exist, type another title');
        setError(true);
      } else {
        if (error) setError(false);
        onAddTodo(fromattedTitle);
        setTitle('');
      }
    }
  };

  return (
    <div className={styles.task_container}>
      <div className={styles.input_container}>
        <input
          placeholder="Add a task"
          value={fromattedTitle}
          onChange={(e) => {
            setTitle(e.target.value);
            setError(false);
          }}
          onKeyPress={(e) => {
            handleEnterSetTodo(e);
          }}
        ></input>
      </div>
      <button
        onClick={() => handleClickSetTodo()}
        className={cn(styles.button_input, {
          [styles['button_input_active']]: fromattedTitle.length > 0,
        })}
      >
        <span>Create</span>
      </button>
      <span
        className={cn(styles.error_text, {
          [styles['error_text_visible']]: error,
        })}
      >
        This note already exists
      </span>
    </div>
  );
};

export default CreateTask;
