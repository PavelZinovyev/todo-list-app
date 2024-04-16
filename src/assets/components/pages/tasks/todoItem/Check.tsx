import cn from 'classnames';
import { BsCheck } from 'react-icons/bs';
import styles from './todoItem.module.scss';

interface Props {
  isCompleted: boolean;
}

const Check = ({ isCompleted }: Props) => {
  return (
    <div className={cn(styles.check, { [styles[`check_done`]]: isCompleted })}>
      {isCompleted && <BsCheck size={24} className="text-gray-900" />}
    </div>
  );
};

export default Check;
