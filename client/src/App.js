import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Navigate } from "react-router-dom";

import "./App.css";
import ProccessMain from "./components/proccess/ProccessMain";
import ProccessStart from "./components/proccess-start/ProccessStart";

// components
import Main from "./components/UI/Main";

//Gotologin
import Gotologin from "./components/UI/gotologin";

import Login from './components/Login/index'

import { UpdateDataProvider } from "./context/UpdateDataContext";

function App(props) {
  const [access, setAccess] = useState(false)
  var user = localStorage.getItem("token");
  if (user == null) {
    setAccess(false)
  }
  else if (user.includes('Bearer')) {


    const dateThen = new Date(localStorage.getItem("time"));
    const dateNow = new Date();
    const differenceDates = dateNow.getTime() - dateThen.getTime();

    if (differenceDates < 82800000) {

      setAccess(true);

    }
    else {
      localStorage.removeItem('token');
      localStorage.removeItem('time');
      setAccess(false)

    }
  }
  else {
    console.log(`No thing`);
    setAccess(false)
  }


  return (

    <div className="App">
      {/* routing */}
      <UpdateDataProvider>
        <Router>

          <Switch>

            {access && <Route exact path='/'>
              <Main />
            </Route>}
            {!user && <Route exact path='/'>
              <Login />
            </Route>}
            {access && <Route exact path='/login'>
              <Main />
            </Route>}
            <Route exact path="/login">
              <Login />
            </Route>
            {!access && <Route path="/signup">
              <Login />
            </Route>}
            {access && <Route path="/signup">
              <ProccessMain />
            </Route>}
            {access && <Route path="/sadna">
              <ProccessStart />
            </Route>}
            {!access && <Route path="/sadna">
              <Login />
            </Route>}
            {access && <Route path="/main">
              <Main />
            </Route>}
            {!access && <Route path="/main">
              <Login />
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
