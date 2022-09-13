import React from 'react'
import { useState } from 'react';

const Select = ({options, onSelect, defaultOption}) => {
    return (
        <select onChange={(e) => {onSelect(e.target.value)}}>
            {
            options.map(opcion => (
                <option key={opcion.id} value={opcion.id} selected={(opcion.id == defaultOption) ? "selected" : ""}>{opcion.value}</option>
            ))}
        </select> 
    )
    
}

export const Abstraccion1 = () => {
    const [option, setOption] = useState(1);
    const options = [{id:1, value:"Azul"}, {id:2, value:"Rojo"}, {id:3, value:"Rosa"}];

    function onSelect(valor){
        setOption(valor);
    }

  return (
    <div>
        <Select options={options} onSelect={onSelect} defaultOption={1}></Select>
        <p>Opcion Seleccionada: {option}</p>
    </div>
  );
}

export default Abstraccion1;