import React from 'react';
import "./App.css"
import Sidebar from './components/Sidebar';


function App() {
  return (
    // BEM naming convention
  <div className="App">
    {/* <h1> lets do this</h1> */}

    <div className="app__body">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat */}
    </div>

  </div>
  )
}

export default App;
