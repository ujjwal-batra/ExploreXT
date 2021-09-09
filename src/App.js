import './App.css';
import React, { useState, useEffect } from "react";

import LeftSidebar from './components/left-sidebar/main'
import RightSidebar from './components/right-sidebar/main'

function App() {

  const [files, setFiles] = React.useState([]);
  const [path, setPath] = React.useState([]);
  const [lock, setLock] = React.useState("non-active");

  return (
    <div className="App">
      <div className={lock}></div>
      <LeftSidebar setFiles={setFiles} setPath={setPath}  />
      <RightSidebar files={files} path={path} setLock={setLock}/>
    </div>
  );
}

export default App;
