import React, { useState, useEffect } from "react";
import { Routes , Route , useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <Routes>
        <Route path="/home" element=""/>
        <Route path="/posts" element=""/>
        <Route path="/users" element=""/>
      </Routes>
    </div>
  );
}

export default App;