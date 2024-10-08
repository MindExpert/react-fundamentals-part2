import { useContext } from 'react';
import LoginStatus from './auth/LoginStatus';
import TasksContext from './tasks/tasksContext';

const NavBar = () => {
  const context = useContext(TasksContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{context.tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
