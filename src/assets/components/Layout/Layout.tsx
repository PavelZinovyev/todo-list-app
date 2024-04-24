import { NavLink, Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import { FaTasks } from 'react-icons/fa';
import { IoAddCircle } from 'react-icons/io5';
import { FaFolderClosed } from 'react-icons/fa6';
import { useMediaQuery } from 'react-responsive';

const Layout = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const iconSize = 50;

  return (
    <>
      <>
        {isMobile ? (
          <nav className={styles.navbar_mobile}>
            <NavLink to={'/'}>
              <div className={styles.navbar_mobile_item}>
                <FaTasks size={iconSize} className={styles.icon} />
                <span>Tasks</span>
              </div>
            </NavLink>
            <NavLink to={'/create-task'}>
              <div className={styles.navbar_mobile_item}>
                <IoAddCircle size={iconSize} className={styles.icon} />
                <span>Create task</span>
              </div>
            </NavLink>
            <NavLink to={'/history'}>
              <div className={styles.navbar_mobile_item}>
                <FaFolderClosed size={iconSize} className={styles.icon} />
                <span>History</span>
              </div>
            </NavLink>
          </nav>
        ) : (
          <nav className={styles.navbar_desktop}>
            <NavLink to={'/'}>Tasks</NavLink>
            <NavLink to={'/create-task'}>Create task</NavLink>
            <NavLink to={'/history'}>History</NavLink>
          </nav>
        )}
      </>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
