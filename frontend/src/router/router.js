import React from "react";
import PrivateRoute from "./privateRoute.js";
import PublicRoute from "./publicRoute.js";
import { Switch, BrowserRouter, Redirect } from "react-router-dom"

import Register from "../pages/registro/index.js";
import Login from "../pages/login/index"


export default function Router(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path="/register" exact component={Register} />
                    <PublicRoute path="/login" exact component={Login} />

                    {/* <PublicRoute path="/login" exact component={singInPage} />
                    <PrivateRoute path="/perfil" exact component={Profile} /> */}
                    <Redirect to="/login" />
                </Switch>
            </BrowserRouter>
        </>
    )
}