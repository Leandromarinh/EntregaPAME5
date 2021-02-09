import React from 'react';

import Card from '../Card';

import './styles.css';

import racao from "../images/racao.png";

import meds from "../images/meds.jpg";

import higiene from '../images/higiene.jpg';

import acessorio from '../images/acessorio.jpg';

import tapetes from '../images/tapetes.jpg';

import antipulgas from '../images/antipulgas.jpg';

export default function ProductList(){
    const list=[
        {
            id: 1,
            foto:<img className="racao" src={racao} alt="racao" /> ,
            type:"Rações",
        },
        {
            id: 2,
            foto:<img className="meds" src={meds} alt="meds" />,
            type:"Medicamentos",
        },
        {
            id: 3,
            foto:<img className="higiene" src={higiene} alt="higiene"/>,
            type:"Higiene",
        },
        {
            id: 4,
            foto:<img className="acessorio" src={acessorio} alt="acessorio"/>,
            type:"Acessórios",
        },
        {
            id: 5,
            foto:<img className="tapetes" src={tapetes} alt="tapetes"/>,
            type:"Tapetes",
        },
        {
            id: 6,
            foto:<img className="antipulgas" src={antipulgas} alt="antipulgas"/>,
            type:"Antipulgas",
        },
    ];

    const renderList = list.map(item =>(
        <li key={item.id.toString()}>
            <Card data={item}/>
        </li>
    ) );

    return(
        <div className="list-container">
            <div className="title-container">
                <h1>Produtos</h1>
            </div>
        <div>
            <ul>{renderList}</ul>
        </div>
        
        </div>
    )
}