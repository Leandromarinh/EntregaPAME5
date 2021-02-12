import React from "react";

import Card from "../../Components/Card";

import { Link, useLocation} from 'react-router-dom';

import "./styles.css";

import Header from "../../Components/Header";

import {FiArrowLeft} from "react-icons/fi";

import Footer from "../../Components/Footer";

export default function Newpage() {
    const { state }  = useLocation();
    const data = state.data;
    return (
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
        
        <div className="productList-container">
          <div className="titulo-container">
            <Link to="/">
              <FiArrowLeft id="flecha" size={50} color={"#99a3ae"}/>
            </Link>
            <h1>{data.type}</h1>
          </div>
          <div className="lista-container">
            <div className="carde-container">
              <img className="img" src={data.cachorroimg} alt="product"/>
              <p>{data.cachorro}</p>

            </div>
            <div className="carde-container">
              <img className="img" src={data.gatoimg} alt="product"/>  
              <p>{data.gato}</p>
            </div>
            <div className="carde-container">
              <img className="img" src={data.avesimg} alt="product"/>
              <p>{data.aves}</p>
            </div>
          </div>
          <div className="lista-container">
            <div className="carde-container">
              <img className="img" src={data.peixesimg} alt="product"/>
              
              <p>{data.peixes}</p>
            </div>
            <div className="carde-container">
              <img className="img" src={data.repteisimg} alt="product"/>
              
              <p>{data.repteis}</p>
            </div>
            <div className="carde-container">
              <img className="img" src={data.roedoresimg} alt="product"/>
            
              <p>{data.roedores}</p>
            </div>
          
          </div>
          
          <Footer/>
        
        </div>
    </div>
    );
  }