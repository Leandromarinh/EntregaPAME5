import React from "react";

import "./styles.css";

import Grid from "../Grid";

import Form from "../Form";

export default function Agenda() {
  return (
    <div className="agenda-container">
      <div className="horario">
        <h3>08:00</h3>
        <h3>10:00</h3>
        <h3>12:00</h3>
        <h3>13:00</h3>
        <h3>15:00</h3>
        <h3>17:00</h3>
        <h3>19:00</h3>
      </div>
      <div className="grid-container">
        <Grid />
      </div>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
}
