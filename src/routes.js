import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Mainpage from "./pages/Mainpage";

import Newpage from "./pages/Newpage";

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Mainpage}/>
            <Route path="/MaisProdutos" component={Newpage} />
        </Switch>
    </BrowserRouter>

    )
    
}