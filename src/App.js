import './estilos.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // console.log(new Set([1,2,3,4,3,2,1,1]));
  // console.log(new Set(["a", "b", "c", "a", "b"]));
  // console.log([1,2,3,4,3,2,1,1]);
  // console.log([1, [2,3], [4, [5, [6,7]]]].flat(3));

let titulo = "Productos";
const productos = [
  {id:1, nombre:"Coca Cola", precio:"200"},
  {id:2, nombre:"Pepsi", precio:"190"},
  {id:3, nombre:"Fernet", precio:"1400"},
  {id:4, nombre:"Rutini", precio:"2000"},
];

  return (
    <div>
      <Header />
      <h3>{titulo}</h3>
      <ul>
      {
        productos.map(item => (
          <li key={item.id}>{item.nombre} - ${item.precio}</li>
        ))
      }
      </ul>
      <Footer />
    </div>
  );
}

export default App;
