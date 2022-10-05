import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Navigate } from "react-router-dom";

import "./App.css";
import ProccessMain from "./components/proccess/ProccessMain";
import ProccessStart from "./components/proccess-start/ProccessStart";

// components
import Main from "./components/UI/Main";

import Login from './components/Login/index'

import { UpdateDataProvider } from "./context/UpdateDataContext";

function App(props) {
  const [access, setAccess] = useState(false)
  const user = localStorage.getItem("token");
  const myTime = () => {

    const dateThen = new Date(localStorage.getItem("time"));
    const dateNow = new Date();
    const differenceDates = dateNow.getTime() - dateThen.getTime();
    if (differenceDates < 82800000) {
      setAccess(true);
    }
    else {
      localStorage.removeItem('token');
      localStorage.removeItem('time');
      console.log('Sorry, You cant Access');
      setAccess(false)
    }
  }
  useEffect(() => {
    myTime();
    console.log('He can Access');
  });

  return (

    <div className="App">
      {/* routing */}
      <UpdateDataProvider>
        <Router>

          <Switch>

            {user && access && <Route exact path='/'>
              <Main />
            </Route>}

            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <ProccessMain />
            </Route>
            <Route path="/sadna">
              <ProccessStart />
            </Route>
            {user && <Route path="/main">
              <Main />
            </Route>}

            {/* <Route path="/video/1">
              <Video />
            </Route>
            <Route path="/radar">
              <Chart />
            </Route> */}
          </Switch>
        </Router>
      </UpdateDataProvider>
    </div>
  );
}

export default App;
