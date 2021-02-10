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
        <div className="contador-container">
            <h1> Agendamento de Banho e Tosa</h1>
            
            <div className="container">
                <h3>Para quantos Pets você deseja fazer um agendamento de banho ou tosa?</h3>
                <button className="button" onClick={increment}>Adicionar</button>
                
                <div className="counter-container">
                    <h1>{counter}</h1>
                </div>
                
                <button className="button" onClick={decrease}>Diminuir</button>

            </div>
        </div>
    )
}