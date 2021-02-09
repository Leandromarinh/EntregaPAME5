import React from "react";
import Header from "./Components/Header";

import './global.css';

function App() {
  return (
    <div>
      <Header
      dog="Cachorros"
      cat="gatos"
      bird="aves"
      fish="peixes"
      repteis="répteis"
      others="Outros"
      rats="roedores"
      />

    </div>
  );
}

export default App;
