import React from 'react';
import Picture from '../../imagenes/home1.svg'
import './home.css'
import Typewriter from 'typewriter-effect'
import BtnLogin from './btn-login';


function Home () {
    return (
        <section className="section section-home" id="inicio">
            <div className="frase">
                <div>Con <span>#MuniService</span> realiza de forma online tus 
                <span className="typed"> 
                <Typewriter 
                options={{
                    loop:true
                }}
                    onInit={(typewriter)=>{
                        typewriter.typeString("PAGOS")
                        .pauseFor(2000)
                        .deleteAll()
                        typewriter.typeString("TRAMITES")
                        .pauseFor(2000)
                        .deleteAll()
                        typewriter.typeString("CONSULTAS")
                        .pauseFor(2000)
                        .deleteAll()
                        typewriter.typeString("RECLAMOS")
                        .pauseFor(2000)
                        .deleteAll()
                        .start();
                    }}
                /></span></div>
                <BtnLogin />
            </div>
            <div className="ilustracion">
                <img src={Picture} alt="ilustracion home"></img>
            </div>
        </section>
    )
}

export default Home;