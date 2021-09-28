import './App.css';
import { header as Header } from "@c/header";
import { Tasks } from '@c/tasks'
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'First Task'
    },
    {
      id: 2,
      title: 'Second Task'
    },
  ])
  return (
    <main style={{ width: '90%', maxWidth: '600px', margin: '0 auto'}}>
      <Header title={1} />
      <Tasks tasks={tasks}></Tasks>
    </main>
  );
}

export default App;
