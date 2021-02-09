import React from 'react';

import './styles.css';

export default function Card({data}){
    return(
        <div className="card-container">
            {data.foto}
            <h3>
                {data.type}
            </h3>
        </div>
    )
}