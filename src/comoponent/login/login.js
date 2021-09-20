import React from 'react'
import './login.css'
import Img from '../plugin/consultarHistorial.svg'
import {Link} from 'react-router-dom'


// const URL_data = "http://localhost/server-muni/buscar_usuario.php";

// const Enviardata = async (url,objeto) =>{
//     const respuesta = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(objeto),
//         headers: {
//             'Content-Type': 'aplication/json'
//         }
//     });

//     const json = await respuesta.json();
// }

function Login () {
    // const refDNI = useRef(null);
    // const handleDNI = () =>{
    //     const data = {
    //         "dni" : refDNI.current.value
    //     }
    //     console.log(data);
    //     Enviardata(URL_data,data);
    // }
    return (
        <section className="section section-login">
            <Link to="/">
                <button className="volver-home">Volver <span className="icono-home"></span></button>
            </Link>
            <h3 className="titulo-login">Consulta tu Historial</h3>
            <main className="main-login">
            <form className="form-login">
                <input type="number" placeholder="Ingresa tu DNI"></input>
                <Link to="/historial">
                <button type="button">Consultar</button>
                </Link>
            </form>
            <div className="img-login">
                <img src={Img} alt="img2"></img>
            </div>
            </main>
        </section>
    )
}

export default Login;