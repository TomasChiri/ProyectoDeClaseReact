import React, { useEffect, useState } from "react";

// const SuperForm = (props) => {
//   return(
//     <div>
//       <h1>{props.titulo} estamos cursando {props.curso}</h1>
//       {props.render({textoBoton: "Hacema Click aca!"})}
//       {props.linea()}
//     </div>
//   )
// }

// const SuperButton = ({textoBoton}) => {
//   const HacerClick = () => {
//     console.log("Hola Coders!");
//   }

//   return(
//       <input type="button" value={textoBoton} onClick={HacerClick}/>
//   )
// }

// const LineaHorizontal = () => {
//   return (
//     <hr />
//   )
// }

// function App() {
//   return (
//     <div>
//       <SuperForm titulo="Hola Coders!" curso="React JS" render={SuperButton} linea={LineaHorizontal}/>
//     </div>
//   );
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       curso: "Javascript",
//       lugar: "Coderhouse"
//     };
//   }

//   actualizarNombre = () => {
//     this.setState({curso:"ReactJS"});
//   }

//   render() {
//     return (
//       <div onClick={this.actualizarNombre}>
//         <h1>Bienvenido al Curso de {this.state.curso} en {this.state.lugar}</h1>
//       </div>
//     )
//   }
// }

const App = () => {
  const [curso, setCurso] = useState("Javascript");
  const [clicks, setClicks] = useState(0);
  // const [lugar, setLugar] = useState("Argentina");
  useEffect(() => {
    console.log("2- Componente Montado!");
    setCurso("React JS");
    document.title = "Clicks: " + clicks + " en " + curso;
    return(() => {
      console.log("3- Componente Desmontado!");
      document.title = "";
    })

  }, [clicks, curso]);
  console.log("1- Lo que se va a renderizar!");

  return (
    <div onClick={() => {
      setCurso("Angular JS");
      // setLugar("Coderhouse")
      setClicks(clicks + 1);
      }}>
      <h1>Bienvenidos al Curso de {curso}</h1>
      <p>Clicks: {clicks}</p>
    </div>
  )
}

export default App;
