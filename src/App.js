import './estilos.css';
import 'core-js/actual';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import Titulo from './components/Titulo';
import Input from './components/Input';

function App() {
  const lista = ["Desarrollo Web", "Javascript", "React JS"];
  const items = lista.map(items => (
    <Item  valor={items}/>
  ))
  return (
    <div className='container'>
      <Header curso="Curso de " tipo="React" />
      <main className="py-3">
        <Titulo valor="Cursos de Coderhouse" />
        <ul>
          {items}
        </ul>
        <Titulo valor="Formulario de Contacto" />
        <form>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <Input valor="Nombre" /> <br />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <Input valor="Email" /> <br />
          </div>
          <button type="button" className="btn btn-primary">Enviar</button>
        </form>
      </main>
      <Footer ubicacion="Coderhouse" anio="2022" />
    </div>
  );
}

export default App;
