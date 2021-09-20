import React from "react";
import "./header.css";
import HeaderLinks from "./headerLinks";
import Logo3 from "../../imagenes/logo.png";
import { useState } from "react/cjs/react.development";

function Nav() {
    const [valor,cambiarValor] = useState(true);
    const toggle = () => {
        cambiarValor(!valor);
    }
    return (
      <nav className="nav">
        <div className="logo">
          <h1>MuniService</h1>
          <img src={Logo3} alt="logo de la municipalidad de Oran" />
        </div>
        <div className={valor ? 'menu' : 'menu activado'} onClick={toggle}></div>
        <ul className={valor ? 'navegacion' : 'navegacion show'}>
          {HeaderLinks.map((item, index) => {
            return (
              <li key={index} className={item.clase}>
               <a href={item.href}>{item.titulo}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
}

export default Nav;
