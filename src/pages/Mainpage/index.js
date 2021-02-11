import React from 'react';

import './styles.css';

import Header from "../../Components/Header"

import Main from "../../Components/Main";


export default function Mainpage(){
    return(
    <div>
        <Header 
            dog="Cachorros"
            cat="Gatos"
            bird="Aves"
            fish="Peixes"
            repteis="Répteis"
            others="Outros"
            rats="Roedores"
        />
    
        <Main />
    </div>
    )
    
}

