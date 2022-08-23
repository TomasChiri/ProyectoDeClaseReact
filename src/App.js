import './estilos.css';
import 'core-js/actual';

function App() {
  console.log(new Set([1,2,3,4,3,2,1,1]));
  console.log(new Set(["a", "b", "c", "a", "b"]));
  console.log([1,2,3,4,3,2,1,1]);
  console.log([1, [2,3], [4, [5, [6,7]]]].flat(3));

  return (
    <div>

    </div>
  );
}

export default App;
