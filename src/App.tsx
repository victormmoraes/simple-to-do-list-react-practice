import { Header } from './components/Header/Header';
import { NewTask } from './components/NewTask/NewTask';

import './global-styles.css'
import styles from './App.module.css';
import { Tasks } from './components/Tasks/Tasks';
import { useState } from 'react';
import { Task } from './components/types';


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <NewTask tasks={tasks} onCreateNewTask={setTasks} />
        <Tasks tasks={tasks} onTaskManipulation={setTasks}/>
      </div>

    </div>
  )
}

export default App
