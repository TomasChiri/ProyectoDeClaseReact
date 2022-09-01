import React from "react";

const App = () => {
  const productos = [
    {id:1, nombre:"Coca Cola", precio:200},
    {id:2, nombre:"Pepsi", precio:190},
    {id:3, nombre:"Manaos", precio:150}
  ];
  //console.log(productos.map(item => item.nombre).join("-"));

  return (
    <div>
      <h1>Map</h1>
      <ul>
        {productos.map(item => 
          <li id={"producto_" + item.id} key={item.id}>{item.nombre} - ${item.precio} </li>)}
      </ul>
    </div>
  )
}

export default App;
