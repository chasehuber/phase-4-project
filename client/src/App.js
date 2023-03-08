import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <h1>Page Count: {count}</h1>
        </Route>
      </Switch>
    </div>
  );
} 

export default App;