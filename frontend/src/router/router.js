import React from "react";
import PrivateRoute from "./privateRoute.js";
import PublicRoute from "./publicRoute.js";
import { Switch, BrowserRouter, Redirect } from "react-router-dom"

import Register from "../pages/registro/index.js";
import Login from "../pages/login/index"


export default function Router(props){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path="/register" exact component={Register} />
                    <PublicRoute path="/login" exact component={Login} />
                    <PrivateRoute path="/dashboard" exact component={Register} />
                    <Redirect to="/login" />
                </Switch>
            </BrowserRouter>
        </>
    )
}