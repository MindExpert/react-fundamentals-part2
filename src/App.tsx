
import './App.css'
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import TaskProvider from './state-management/tasks/TaskProvider';

function App() {


  return (
    <>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </>
  );
}


export default App
