import React from 'react';

import './styles.css';

import Contador from "../Contador";

import ProductList from "../ProductList";

export default function Main(){
    return(
        <div className="contador-container">
            <Contador/>
            <ProductList/>
        </div>

    )
}