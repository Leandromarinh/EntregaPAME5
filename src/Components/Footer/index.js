import React from "react";

import "./styles.css";

import {AiOutlineClockCircle, AiOutlineMail} from "react-icons/ai";

export default function Footer() {
    return(
        <div className="footer-container">
            <div className="info-container">
                <div className="title-container">
                    <p id="ins">Institucional</p>
                </div>
                <p> PetShopOn.com.br </p>
                <p> Contato </p>
                <p> Política de devolução, Trocas e Reembolso </p>
                <p> Depoimentos de clientes </p>
                <p> Endereço: Av. Dom Hélder Câmara, 5474 </p>
                <p> Loja: 1054 </p>
            </div>
            <div className="info2-container">
                <div className="title-container">
                    <p id="ate">Atendimento</p>
                </div>
                <div className="hour">
                    <AiOutlineClockCircle size={50} color={"#ffffff"}/>
                    <div className="words">
                        <p>Horários de Funcionamento</p>
                        <p>Atendimento de Segunda a Sexta</p>
                        <p>das 8:00 as 12:00 e das 13:00 as 19:00</p>
                        <p>E aos Sábados de 10:00 as 17:00</p>
                    </div>
                </div>
                <div className="email">
                    <AiOutlineMail size={50} color={"#ffffff"}/>
                    <div>
                        <p> sac@PetShopOn.com.br </p>
                    </div>
                </div>

            </div>
            <div className="info3-container">
                <div className="title-container">
                    <p>Minha Conta</p>
                </div>
                <p> Criar conta </p>
                <p> Minha Conta </p>
                <p> Meus pedidos </p>

            </div>

        </div>
    )
}