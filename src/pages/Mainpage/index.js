import React from 'react';

import './styles.css';

import Header from "../../Components/Header"

import Main from "../../Components/Main";

import Footer from "../../Components/Footer";


export default function Mainpage(){
    return(
    <div className="main-page">
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

        <Footer/>
    </div>
    )
    
}

