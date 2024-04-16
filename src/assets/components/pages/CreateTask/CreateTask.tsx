import styles from './createTask.module.scss';
import { useState, FC } from 'react';
import cn from 'classnames';

interface AddTodo {
  onAddTodo: (title: string) => void;
}

const CreateTask: FC<AddTodo> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const fromattedTitle = title.trimStart();

  const handleEnterSetTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && fromattedTitle.length > 0) {
      onAddTodo(fromattedTitle);
      setTitle('');
    }
  };

  const handleClickSetTodo = () => {
    if (fromattedTitle.length > 0) {
      onAddTodo(fromattedTitle);
      setTitle('');
    }
  };

  return (
    <div className={styles.task_container}>
      <div className={styles.input_container}>
        <input
          placeholder="Add a task"
          value={fromattedTitle}
          onChange={(e) => setTitle(e.target.value)}
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
    </div>
  );
};

export default CreateTask;
