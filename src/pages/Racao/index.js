import React from "react";

import Card from "../../Components/Card";

import { Link, useLocation} from 'react-router-dom';

import "./styles.css";

import Header from "../../Components/Header";

import {FiArrowLeft} from "react-icons/fi";

export default function Racao() {
    const {state}  = useLocation();
    const data = state.data ;
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
          <div className="title-container">
            <Link to="/">
              <FiArrowLeft id="flecha" size={50} color={"#99a3ae"}/>
            </Link>
            <h1>{data.type}</h1>
          </div>
          <div className="list-container">
            <div className="card-container">
              <h1>{data.cachorroimg}</h1>
              <p>{data.cachorro}</p>

            </div>
            <div className="card-container">
              <h1>{data.gatoimg}</h1>
              <p>{data.gato}</p>
            </div>
            <div className="card-container">
              <h1>{data.avesimg}</h1>
              <p>{data.aves}</p>
            </div>
          </div>
          <div className="list-container">
            <div className="card-container">
              <h1>{data.peixesimg}</h1>
              <p>{data.peixes}</p>
            </div>
            <div className="card-container">
              <h1>{data.repteisimg}</h1>
              <p>{data.repteis}</p>
            </div>
            <div className="card-container">
            <h1>{data.roedoresimg}</h1>
              <p>{data.roedores}</p>
            </div>
          </div>

        </div>
    </div>
    );
  }