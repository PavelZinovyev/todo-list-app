import styles from './notFound.module.scss';
import IconNotFound from '../../../img/404_not_found.png';

const NotFound = () => {
  return (
    <div className={styles.block}>
      <img src={IconNotFound} alt="Logo"></img>
      <span>Not found 404</span>
    </div>
  );
};

export default NotFound;
