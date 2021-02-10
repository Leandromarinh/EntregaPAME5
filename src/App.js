import React from "react";

import Header from "./Components/Header";

import Main from "./Components/Main";
import ProductList from "./Components/ProductList";

import './global.css';

function App() {
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
      
      <Main/>

    </div>
  );
}

export default App;
