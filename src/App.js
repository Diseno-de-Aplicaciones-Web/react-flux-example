import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import Portada from './vistas/Portada';
import VistaDatos from './vistas/VistaDatos';
import Backoffice from './vistas/Backoffice';
import { ServicioOfertas } from './servicios/ServicioOfertas';

function App() {
  return (
  <ServicioOfertas>
  <BrowserRouter>
    <h1>React Flux example</h1>
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/ofertas/">Ofertas</Link></li>
        <li><Link to="/backoffice/">Backoffice</Link></li>
      </ul>
    </nav>
    <main>
      <Routes>
        <Route path='/' element={<Portada/>}/>
        <Route path='/backoffice/' element={<Backoffice/>}/>
        <Route path='/ofertas/' element={<VistaDatos/>}/>
      </Routes>
    </main>
  </BrowserRouter>
  </ServicioOfertas>
  );
}

export default App;
