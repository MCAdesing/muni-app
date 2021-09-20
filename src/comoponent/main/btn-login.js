import React from 'react'
import './btn-login.css'
import {Link} from 'react-router-dom'

function BtnLogin () {
    return (
        <Link to="/login">
            <button className="btn-login">Ingresar</button>
        </Link>
    )
}


export default BtnLogin;