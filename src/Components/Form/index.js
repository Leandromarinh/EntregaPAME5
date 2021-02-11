import React, { useState } from "react";

import "./styles.css";

import Contador from "../Contador";

export default function From() {
  return (
    <div className="form-container">
      <h2>Agende Aqui!</h2>
      <form>
        <div className="service-container">
          <label htmlFor="service">Serviço:</label>
          <input
            id="service"
            name="service"
            placeholder="Digite banho ou tosa!"
            type="text"
          />
        </div>
        <div className="day-container">
          <label htmlFor="day">Dia:</label>
          <input
            id="day"
            name="day"
            placeholder="Digite o dia desejado! (Ex.: 12/02)"
            type="text"
          />
        </div>
        <div className="hour-container">
          <label htmlFor="hour">Horário:</label>
          <input
            id="hour"
            name="hour"
            placeholder="Digite um horário disponível! (Ex.: 13-15)"
            type="text"
          />
        </div>
        <div className="pet-container">
          <label htmlFor="pet">Pet:</label>
          <input
            id="pet"
            name="pet"
            placeholder="Seu pet é um gato ou cachorro? "
            type="text"
          />
        </div>
        <div className="name-container">
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            placeholder="Digite o nome do seu Pet!"
            type="text"
          />
        </div>
        <div className="race-container">
          <label htmlFor="race">Raça:</label>
          <input
            id="race"
            name="race"
            placeholder="Digite a raça do seu Pet!"
            type="text"
          />
        </div>
        <div className="port-container">
          <label htmlFor="port">Porte:</label>
          <input
            id="port"
            name="port"
            placeholder="Digite o porte do seu Pet!"
            type="text"
          />
        </div>
        <div className="age-container">
          <label htmlFor="age">Idade:</label>
          <input
            id="age"
            name="age"
            placeholder="Digite a idade do seu Pet!"
            type="text"
          />
        </div>

        <button className="button">Agendar!</button>
      </form>
    </div>
  );
}
