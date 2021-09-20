import React from 'react'
import './service.css'
import ListaService from './lista_services'
import listaImagenes from './listaImagenes'

function Service () {
    return (
        <section className="section section-service" id="servicios">
            <h2 className="titulo">Servicios disponibles</h2>
            <div className="service-grid">
            {ListaService.map((item,index)=>{
               return <div className={item.clase} key={index}>
                    <img src={listaImagenes[index]} alt="ilustracion"></img>
                    <p>{item.titulo}</p>
                </div>
            })}
            </div>
        </section>
    )
}

export default Service;