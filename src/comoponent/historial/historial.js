import React from 'react'
import './historial.css'
import { Link } from 'react-router-dom'
import ResumenImg from '../plugin/resumenHistorial.svg'

function Historial () {
    return (
        <section className="section section-historial">
            <div className="btns">
                <Link to="/">
                    <button className="inicio-btn">Inicio</button>
                </Link>
                <Link to="/login">
                    <button className="nueva-consulta">Otra consulta</button>
                </Link>
            </div>
            <h4 className="titulo-historial">Resumen de tu historial</h4>
            <div className="main-resumen">
                <div className="resumen-img">
                    <img src={ResumenImg} alt="imagen ilustrativa"></img>
                </div>
                <div className="carta-resumen">
                    <h3>Carrizo Mario</h3>
                    <p>DNI: <span>0000000</span></p>
                    <p>Deuda pediente: <span>$2500</span></p>
                    <button>Pagar Deuda</button>
                </div>
            </div>
        </section>
    )
}

export default Historial;