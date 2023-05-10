import './App.css';
import Portada from './vistas/Portada';
import VistaDatos from './vistas/VistaDatos';
import Backoffice from './vistas/Backoffice';
import { ServicioOfertas } from './servicios/ContextoOfertas';

function App() {
  return (
  <ServicioOfertas>
  <h1>React Flux example</h1>
  <main>
    <Portada/>
    <Backoffice/>
    <VistaDatos/>
  </main>
  </ServicioOfertas>
  );
}

export default App;
