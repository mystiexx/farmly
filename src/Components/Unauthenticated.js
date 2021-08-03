import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";


function Unauthenticated(){
    return(
        <>
              <Route exact path="/" component={Login} />
              <Redirect to='/'/>
        </>
    )
}

export default Unauthenticated