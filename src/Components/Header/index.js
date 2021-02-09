import React from "react";

import "./styles.css";

import {FaPhoneAlt, FaCommentDots, FaUserAlt, FaSearch, FaShoppingCart} from 'react-icons/fa';

import {IoLogoWhatsapp} from 'react-icons/io';

import logo from '../images/logo.png';

export default function Header({dog, cat, bird, fish, others, rats, repteis}){
    return(
        <div className="header-container">
            <div className="header-top">
                <div className="header-coment">
                    <p><FaCommentDots/></p>
                    <h5>Fale conosco</h5>
                </div>
                <div className="header-phone">
                    <p><FaPhoneAlt/></p>
                    <h5> Telefone: (21) 4584-4548</h5>
                </div>
                <div className="header-whats">
                    <p><IoLogoWhatsapp/></p>
                    <h5> Whatsapp: (21) 98435-0789</h5>
                </div>
            </div>
            <div className="header-mid">
                <img className="header-logo" src={logo} alt="logo"/>
                <input id="pesquisar" placeholder="  Digite o que você procura? 🔍" />
                <div className="header-login">
                    <h2><FaUserAlt/></h2>
                    <p>Login/Cadastro</p>
                </div>
                <div className="header-shop">
                    <h1><FaShoppingCart/></h1>
                    <p>Carrinho</p>
                </div>
            </div>
            <div className="header-bottom">
                <h3>{dog}</h3>
                <h3>{cat}</h3>
                <h3>{bird}</h3>
                <h3>{fish}</h3>
                <h3>{repteis}</h3>
                <h3>{rats}</h3>
                <h3>{others}</h3>
            </div>
        </div>
    )
}
