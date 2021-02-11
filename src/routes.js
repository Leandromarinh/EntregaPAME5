import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Mainpage from "./pages/Mainpage";

import Racao from "./pages/Racao";

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Mainpage}/>
            <Route path="/Rações" component={Racao} />
        </Switch>
    </BrowserRouter>

    )
    
}