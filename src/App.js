import './App.css';
import { Header } from "@c/header";
import { Tasks } from '@c/tasks'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { ContextBuilder } from '@c/contextBuilder'
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
      
      <main style={{ width: '90%', maxWidth: '600px', margin: '0 auto' }}>
        <header>this is the header</header>
      <h1>Only show in homepage</h1>
      <ul style={{ width: '100%'}}>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/context">context</Link>
                </li>
            </ul>
      {/* Switch will match the current route with the registered components inside */}
      <Switch>
        <Route exact path="/" render={(props) => (
         <>
            <Header title={1} />
            <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
          </>
        )} />
        <Route exact path="/context">
          <ContextBuilder />
        </Route>
        {/* 404 page */}
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
      </main>


    </Router>
  );
}

export default App;
