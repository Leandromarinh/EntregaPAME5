import React from "react";

import Card from "../../Components/Card";

import { Link, useLocation} from 'react-router-dom';

import "./styles.css";

import Header from "../../Components/Header";

import {FiArrowLeft} from "react-icons/fi";

export default function Racao() {
    const list = [
      {
        id: 1,
        foto: <img className="cachorro" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKjzVnjViqFIzrDYEZrjjVLFW_qnLNkhGDjos1Op1-f22Dz4-OuGa9E13EScuqHUFjskn8jP4j5w&usqp=CAc" 
        alt="cachorro" />,
        type: "Ração de Cachorro",
      },
      {
        id: 2,
        foto: <img className="gato" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQciDo90dYCnSD352D7y9MlEtfMHaH5e37vb0vIz6_0n-CH3-hlbnxuvnbhB2Mv&usqp=CAc"
        alt="gato" />,
        type: "Ração de Gato",
      },
      {
        id: 3,
        foto: <img className="aves" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUU4kte6ZsEssmksr_WZG0-TgrVpQGQ9YnxaHhu1HYbe6xgg7_EQxaBAb_tZ0s0DE68ALlq4F4qgo&usqp=CAc"
        alt="aves" />,
        type: "Ração de aves",
      },
      {
        id: 4,
        foto: <img className="peixes" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdd67hgII36FjazRiKVeL4AXa8Vtszy1UOUMqUvEJu0nOweR4fUyi-4j_1HWgV&usqp=CAc"
        alt="peixes" />,
        type: "Ração de Peixes ",
      },
      {
        id: 5,
        foto: <img className="repteis" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzM2qDQ4GDgnRgOUW3EkdC5UwBmk_y84WTsV5ym0AXyQZgpkxtHbK7bCApEYKf89ysiFH3Lb4j6c4&usqp=CAc" 
        alt="repteis" />,
        type: "Ração de Répteis",
      },
      {
        id: 6,
        foto: <img className="roedores" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRF7GKSraF5iQt9EKQMkQ-Tcz5mUBotLw9RR0iPpoI5xM8AROm6IsFos8E1vQszK0jHu-Skh4bqAIs&usqp=CAc"
        alt="roedores" />,
        type: "Ração de Roedores",
      },
    ];
  
    const renderList = list.map((item) => (
      <li key={item.id.toString()}>
        <Card data={item} />
      </li>
    ));
  
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
        <div className="list-container">
            <div className="title-container">
                <Link to="/">
                    <FiArrowLeft id="flecha" size={50} color={"#99a3ae"}/>
                </Link>
                <h1>Rações</h1>
            </div>
        <div>
          <ul>{renderList}</ul>
        </div>
      </div>
    </div>
    );
  }