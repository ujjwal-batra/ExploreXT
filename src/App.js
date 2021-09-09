import './App.css';
import React, { useState, useEffect } from "react";

import LeftSidebar from './components/left-sidebar/main'
import RightSidebar from './components/right-sidebar/main'

function App() {

  const [files, setFiles] = React.useState([]);
  const [path, setPath] = React.useState([]);

  return (
    <div className="App">
      <LeftSidebar setFiles={setFiles} setPath={setPath} />
      <RightSidebar files={files} path={path}/>
    </div>
  );
}

export default App;
