import React from "react";
import PrivateRoute from "./privateRoute.js";
import PublicRoute from "./publicRoute.js";
import { Switch, BrowserRouter, Redirect } from "react-router-dom"

import Register from "../pages/registro/index.js";
import Login from "../pages/login/index"
import Dashboard from "../pages/dashboard/index.js"


export default function Router(props){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path="/register" exact component={Register} />
                    <PublicRoute path="/login" exact component={Login} />
                    <PrivateRoute path="/dashboard" exact component={Dashboard} />
                    <Redirect to="/login" />
                </Switch>
            </BrowserRouter>
        </>
    )
}