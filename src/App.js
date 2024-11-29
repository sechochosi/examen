import AddTask from './components/AddTask.js';
import TaskList from './components/TaskList.js';
import { TasksProvider } from './components/TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>UIDE</h1>
      <h1>Registro de Estudiante</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
