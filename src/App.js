import React from "react";
import './App.css';
import Sidebar from "./Components/Sidebar";
import Feed from './Components/Feed'
import Widgets from "./Components/Widgets";
import Explore from "./Components/Explore";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1></h1>

      {/* sidebar */}
      <Sidebar />

      {/* Feed */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Feed} exact />
          <Route path="explore" component={Explore} />
        </Switch>
      </BrowserRouter>






      
      {/* <Feed /> */}

      {/* Widgets */}
      {/* <Widgets /> */}


    </div>
  );
}

export default App;
