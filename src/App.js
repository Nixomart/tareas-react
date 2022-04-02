import './App.css';
import Task from './components/task';
import Form from './components/form';
import TaskList from './components/taskList';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1 className='letra'>Tareas en React</h1>
      </div>
      <div className='principal-task-list'>
        <h2>Mis tareas</h2>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
