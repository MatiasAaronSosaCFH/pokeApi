import React from 'react';

export default function NavBarPropia(){
    const estilo_boton ={
        "margin":"5px",
        "borderRadius":"20px",
        "color":"red",
        "backgroundColor":"pink"
    };
    return(
        <>

            <nav>
                <div>
                <button style={estilo_boton}><span >Documentos</span></button>
                <button style={estilo_boton}><span >Lenguajes</span></button>
                <button style={estilo_boton}><span >Herramientas</span></button>
                </div>

            </nav>
        </>
    );
}