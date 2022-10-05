import React from 'react'
import { BrowserRouter as Router, Switch, Route, Navigate,Link } from "react-router-dom";

const gotologin = () => {
  return (
    <div>
      <h1>Please Go To login</h1>
      <button><Link to='/login' target="_blank">Go to login page</Link></button>
    </div>
  )
}

export default gotologin
