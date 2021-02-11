import React from "react";

import "./styles.css";

import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
  <Link 
    style={{textDecoration: 'none'}} 
    to={{ 
      pathname: '/Rações',
      state: {
        data: data
      }
    }}
  >
    <div className="card-container">
      {data.foto}
      <h3>{data.type}</h3>
    </div>
  </Link>
  );
}
