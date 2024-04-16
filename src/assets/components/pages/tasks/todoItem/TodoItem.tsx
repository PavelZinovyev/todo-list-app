import styles from './todoItem.module.scss';
import cn from 'classnames';
import Check from './Check';
import { FC } from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';

interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface ITodoItemProps {
  todo: ITodo;
  onRemoveTodo: (id: number) => void;
  onChangeTodo: (id: number) => void;
}

const TodoItem: FC<ITodoItemProps> = ({ todo, onRemoveTodo, onChangeTodo }) => {
  return (
    <div className={styles.item_container}>
      <button className={styles.item} onClick={() => onChangeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted} />
        <span className={cn({ [styles['item-line-through']]: todo.isCompleted })}>
          {todo.title}
        </span>
      </button>
      <button>
        <HiOutlineTrash
          onClick={() => onRemoveTodo(todo.id)}
          size={22}
          className={styles.trash}
        ></HiOutlineTrash>
      </button>
    </div>
  );
};

export default TodoItem;
