// App.js - The main component that holds our entire application
// This is much simpler than the default Create React App version

import React from 'react';
import './App.css';
import FileUpload from './FileUpload';

function App() {
  return (
    <div className="App">
      <FileUpload />
    </div>
  );
}

export default App;