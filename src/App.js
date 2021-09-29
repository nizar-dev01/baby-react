import './App.css';
import { header as Header } from "@c/header";
import { Tasks } from '@c/tasks'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
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
  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id))
  }
  return (
    <Router>
      <header>this is the header</header>
      <Link to="/test">Test link</Link>

      <Switch>
        <Route exact path="/" render={(props) => (
          <main style={{ width: '90%', maxWidth: '600px', margin: '0 auto' }}>
            <Header title={1} />
            <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
          </main>
        )} />
        <Route render={(props) => (
          <>
            <h1>404</h1>
            <Link to="/">Back Home</Link>
          </>
        )} />
      </Switch>


      <footer>
        this is the footer
      </footer>
    </Router>
  );
}

export default App;
