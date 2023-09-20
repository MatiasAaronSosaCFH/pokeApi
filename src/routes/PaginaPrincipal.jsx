import React from 'react';
import { Link } from 'react-router-dom';


export default function paginaPrincipal(){
    return(
        <div>
        <h1>ESTA ES LA PAGINA PRINCIPAL</h1>
        <Link to="PaginaUno">Pagina uno</Link>
        </div>
        
    );
}