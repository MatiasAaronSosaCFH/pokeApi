import React from 'react';
import { Link } from 'react-router-dom';


export default function paginaUno(){
    return(
        <div>
            <h1>PAGINA UNO</h1>

            <p>cosas de la pagina</p>
            <Link to="PaginaPrincipal">VOLVIENDO A LA PAGINA PRINCIPAL</Link>
        </div>
        
    );
}

