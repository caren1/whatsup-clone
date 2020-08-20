import React, { useState } from 'react';
import "./App.css"
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'



function App() {

  const [ user, setUser ] = useState(null)



  return (
    // BEM naming convention
  <div className="App">
    {/* <h1> lets do this</h1> */}

    {!user ?  (<Login />) 
    : (
      <div className="app__body">
      <Router>
      <Sidebar />
        <Switch>

          <Route path="/rooms/:roomId">
            <Chat />
          </Route>

          <Route path="/">
            <Chat />
          </Route>

        </Switch>
      </Router>  
    </div>
    )
    }
  </div>
  )
}

export default App;
