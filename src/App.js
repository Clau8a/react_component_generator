import React from 'react';
import NavBar from './components/navbar/navbar';
import Form from './components/form/form';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div style={{margin:"1em 0"}}>
          <h2>React component Generator</h2>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
