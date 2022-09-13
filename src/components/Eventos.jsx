import React from 'react'
import { useState } from 'react';
import ItemDetail from './ItemDetail';

export const Eventos = () => {
    const [estado, setEstado] = useState("");

    const hacerClick = (e) => {
        e.preventDefault();
        let nombre = document.getElementById("nombre").value;

        if(nombre==""){
            setEstado("El campo nombre esta vacio!");
        }else{
            setEstado("");
        }

        console.log("Fin");
    }

  return (
    <div>
        {/* <form method='post' action="enviar.php">
            <label>Nombre</label><br />
           <input type="text" id="nombre" value="" onChange={()=>{}}/> 
           <input type="submit" onClick={hacerClick} value="Aceptar"/> 
        </form>
        {estado} */}
        <ItemDetail item={{id:1, min:1, max:5, inStock:true}} inputType={"button"}/>
    </div>
  );
}

export default Eventos;