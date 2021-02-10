import React from 'react';

import './styles.css';

import Contador from "../Contador";

import ProductList from "../ProductList";

import Agenda from "../Agenda";

export default function Main(){
    return(
        <div className="main-container">
            <Contador/>
            <Agenda/>
            <ProductList/>
        </div>

    )
}