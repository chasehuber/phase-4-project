
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Routes, useNavigate } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home" element=""/>
          <Route path="/posts" element=""/>
          <Route path="/users" element=""/>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;