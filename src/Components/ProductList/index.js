import React from "react";

import Card from "../Card";

import "./styles.css";

import racao from "../images/racao.png";

import meds from "../images/meds.jpg";

import higiene from "../images/higiene.jpg";

import acessorio from "../images/acessorio.jpg";

import tapetes from "../images/tapetes.jpg";

import antipulgas from "../images/antipulgas.jpg";

export default function ProductList() {
  const list = [
    {
      id: 1,
      foto: <img className="racao" src={racao} alt="racao" />,
      type: "Rações",

      cachorro: "Ração de Cachorro",
      cachorroimg: (
        <img
          className="img"
          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKjzVnjViqFIzrDYEZrjjVLFW_qnLNkhGDjos1Op1-f22Dz4-OuGa9E13EScuqHUFjskn8jP4j5w&usqp=CAc"
          alt="cachorro-rac"
        />
      ),

      gato: "Ração de Gato",
      gatoimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQciDo90dYCnSD352D7y9MlEtfMHaH5e37vb0vIz6_0n-CH3-hlbnxuvnbhB2Mv&usqp=CAc"
          alt="gato-rac"
        />
      ),

      aves: "Ração de Aves",
      avesimg: (
        <img
          className="img"
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUU4kte6ZsEssmksr_WZG0-TgrVpQGQ9YnxaHhu1HYbe6xgg7_EQxaBAb_tZ0s0DE68ALlq4F4qgo&usqp=CAc"
          alt="aves-rac"
        />
      ),

      peixes: "Ração de Peixes",
      peixesimg: (
        <img
          className="img"
          src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdd67hgII36FjazRiKVeL4AXa8Vtszy1UOUMqUvEJu0nOweR4fUyi-4j_1HWgV&usqp=CAc"
          alt="peixes-rac"
        />
      ),

      repteis: "Ração de Répteis",
      repteisimg: (
        <img
          className="img"
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzM2qDQ4GDgnRgOUW3EkdC5UwBmk_y84WTsV5ym0AXyQZgpkxtHbK7bCApEYKf89ysiFH3Lb4j6c4&usqp=CAc"
          alt="repteis-rac"
        />
      ),

      roedores: "Ração de Roedores",
      roedoresimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRF7GKSraF5iQt9EKQMkQ-Tcz5mUBotLw9RR0iPpoI5xM8AROm6IsFos8E1vQszK0jHu-Skh4bqAIs&usqp=CAc"
          alt="roedores-rac"
        />
      ),
    },
    {
      id: 2,
      foto: <img className="meds" src={meds} alt="meds" />,
      type: "Medicamentos",

      cachorro: "Medicamento de Cachorro",
      cachorroimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E8RCL0sBl0D7AWYwOLvemiSSYU7fJYZmlFCx4jVw7G-XNSOX3L60RdeT9JseN4qbnLX6ws90&usqp=CAc"
          alt="cachorro-med"
        />
      ),

      gato: "Medicamento de Gato",
      gatoimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tn-t7_EGbTVZ-Y_KQvkNEBHLna3l8aZlclTjs_yJumpfgVC1KJ-Uw58mSjoH-x5JSABZZx8&usqp=CAc"
          alt="gato-med"
        />
      ),

      aves: "Medicamento de Aves",
      avesimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDf4k8_KCIDPp6346Fg0UfRt45IfaUQwvV9rp7Wr7kpvwTTb1m6fG6Kx0r9lDurMyhD8wMzUI&usqp=CAc"
          alt="aves-med"
        />
      ),

      peixes: "Medicamento de Peixes",
      peixesimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXj442rzwMuec8NkBszjpyF9VzQgcfqb59ngMAiqz1km802FCfdqQLLHTLUmI2gPb2VfePlM&usqp=CAc"
          alt="peixes-med"
        />
      ),

      repteis: "Medicamento de Répeteis",
      repteisimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiBLAhMgQzy5ZVvJiwkRJZMAgGGx-1Y2AyRLZWVoWny6qW2ACEi6nnl6aCCgbQaNH-EAcum4&usqp=CAc"
          alt="repteis-med"
        />
      ),

      roedores: "Medicamento de Roedores",
      roedoresimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-MN7pWjpx8qIHs7edSHcC2EI5dhs_6FpWNXOsu-W0q7G8k697UZIUux5W4E&usqp=CAc"
          alt="roedores-med"
        />
      ),
    },
    {
      id: 3,
      foto: <img className="higiene" src={higiene} alt="higiene" />,
      type: "Higiene",

      cachorro: "Higiene de Cachorro",
      cachorroimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihiAGIGpxudAUo5QSLcxiodNQgZUGMv17c8ZAG5zprdTTwt7QexhGwIeDcg&usqp=CAc"
          alt="cachorro-hig"
        />
      ),

      gato: "Higiene de Gato",
      gatoimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhvhR2HgOxy-1mbKSVXv1bavrKOwfYo0_C3w5zJ5vkNXl1MrcamgK6V_xeDT2iqdDUujJTSyn&usqp=CAc"
          alt="gato-hig"
        />
      ),

      aves: "Higiene de Aves",
      avesimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsCF1EHMzdasf8hz-raJm6LRh92nceV3ewnQ&usqp=CAU"
          alt="aves-hig"
        />
      ),

      peixes: "Higiene de Peixes",
      peixesimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_NpR9a3Xabp4BtALrqyji0aS2O2lAWaiaDswBG-E2KXV4Wno4E_Bi4lWiIwDU11Li5QfD77kmX8LsZIy6DhrFdW9PdUbIWBqPc8GT7sU&usqp=CAE"
          alt="peixes-hig"
        />
      ),

      repteis: "Higiene de Répteis",
      repteisimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjibDwiBsQZhmxQA_nNe-Al7QQPTxm_fNTA&usqp=CAU"
          alt="repteis-hig"
        />
      ),

      roedores: "Higiene de Roedores",
      roedoresimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPS3NMRuJlq6lmSMKHiZTuikqvsiIX8W5bNQ&usqp=CAU"
          alt="roedores-hig"
        />
      ),
    },
    {
      id: 4,
      foto: <img className="acessorio" src={acessorio} alt="acessorio" />,
      type: "Acessórios",

      cachorro: "Acessórios de Cachorro",
      cachorroimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQ-qIduxD017Dll7BVy5O3BvEWnggh6_wAiiN5hDiugZZYIVgLTzQdf37_O0&usqp=CAc"
          alt="cachorro-ace"
        />
      ),

      gato: "Acessórios de Gato",
      gatoimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTNLfLM0O0kWmV2K6Dr5Wki4qDMPjAyy00NeqhreJujlzsqtr9Pwnja7tq1nJRJNyGIKJaSo&usqp=CAc"
          alt="gato-ace"
        />
      ),

      aves: "Acessórios de Aves",
      avesimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXACBxFG6K6VmGPlJLJv2sZBWKEb4MZeRvSIf072L3luk2sFGA7h_JpAziK4&usqp=CAc"
          alt="aves-ace"
        />
      ),

      peixes: "Acessórios de Peixes",
      peixesimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRs2wfsnV4Qeken43OiNggeBzDoMLoGLc58kuvVZgg-YCww3K1V1ZbU3ZJQ4k&usqp=CAc"
          alt="peixes-ace"
        />
      ),

      repteis: "Acessórios de Répteis",
      repteisimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROo3MsGLSP3kHKiyhewL4qfVL7uebZNMPrKa1Ndh8rff6XGWryjmDrYGUjpA&usqp=CAc"
          alt="repteis-ace"
        />
      ),

      roedores: "Acessórios de Roedores",
      roedoresimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9cxK-sfrGjrM5Ix0-YpdJ5iKJc5yySFawkrdBfPNtOSzyeQgOFXuFCL-9dkY_i7Son_gWLoS&usqp=CAc"
          alt="roedores-ace"
        />
      ),
    },
    {
      id: 5,
      foto: <img className="tapetes" src={tapetes} alt="tapetes" />,
      type: "Tapetes",

      cachorro: "Tapetes de Cachorro",
      cachorroimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrOKlwlo_-Bg0S6R7qO-FX2Gj_Zlut3ZrUQHeF0FBc5W83j_2_y3BFGwl6wQ&usqp=CAc"
          alt="cachorro-tap"
        />
      ),

      gato: "Tapetes de Gato",
      gatoimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrOKlwlo_-Bg0S6R7qO-FX2Gj_Zlut3ZrUQHeF0FBc5W83j_2_y3BFGwl6wQ&usqp=CAc"
          alt="gato-tap"
        />
      ),

      aves: "",
      avesimg: "",

      peixes: "",
      peixesimg: "",

      repteis: "Tapetes de Répteis",
      repteisimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lH2Vzg0vKky2JLcn1exobjCYdJQl-bHrEq5fVB7VnlOxCiG7tUzA3uxIRNayEWg4TIXQpmzFRQ&usqp=CAc"
          alt="repteis-tap"
        />
      ),

      roedores: "Tapetes de Roedores",
      roedoresimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLGkHfYCxA_PXf_jcs5XDjKDyGtmNfJ2nzRCJTE_rxhC3JZAntRxN6bxR7Gk4Rwmqr6EKb5sn&usqp=CAc"
          alt="roedores-tap"
        />
      ),
    },
    {
      id: 6,
      foto: <img className="antipulgas" src={antipulgas} alt="antipulgas" />,
      type: "Antipulgas",

      cachorro: "Antipulgas de Cachorro",
      cachorroimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9A3b4gfXfFVYQVxQITxpTdHqcvcRumin9eiIe4rQYdDu1lcuQR4b7vXUE4fygVnYbdAhrjAk&usqp=CAc"
          alt="cachorro-ant"
        />
      ),

      gato: "Antipulgas de Gato",
      gatoimg: (
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuktuc2T6P14PXg1j040TZxM_LX4u3kL3fR6BsIWNRtJQ6OZjSlvuOWyIug&usqp=CAc"
          alt="gato-ant"
        />
      ),

      aves: "",
      avesimg: "",

      peixes: "",
      peixesimg: "",

      repteis: "",
      repteisimg: "",

      roedores: "",
      roedoresimg: "",
    },
  ];

  const renderList = list.map((item) => (
    <li key={item.id.toString()}>
      <Card data={item} />
    </li>
  ));

  return (
    <div className="list-container">
      <div className="title-container">
        <h1>Produtos</h1>
      </div>
      <div>
        <ul>{renderList}</ul>
      </div>
    </div>
  );
}
