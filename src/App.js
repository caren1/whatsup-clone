import React from 'react';
import "./App.css"
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'


function App() {
  return (
    // BEM naming convention
  <div className="App">
    {/* <h1> lets do this</h1> */}

    <div className="app__body">
      {/* Sidebar */}
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>

  </div>
  )
}

export default App;
