import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import SignUp from './pages/SignUp';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/signUp" exact component={SignUp}/>
                <Route path="/Feed" exact component={Feed}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;