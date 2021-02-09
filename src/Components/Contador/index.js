import React, { useState } from "react";

import "./styles.css";

export default function Contador(){
    
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1)
    }

    function decrease(){
        setCounter(counter - 1)
    }

    return(
        <div className="container">
            <h2>Para quantos Pets você deseja fazer um agendamento?</h2>
            <button className="button" onClick={increment}>Adicionar</button>
            <div className="counter-container">
                <h1>{counter}</h1>
            </div>
            <button className="button" onClick={decrease}>Diminuir</button>

        </div>
    )
}