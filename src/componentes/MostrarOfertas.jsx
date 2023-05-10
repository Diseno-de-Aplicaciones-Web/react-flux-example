import { useContext } from 'react';
import { contextoOfertas } from '../servicios/ServicioOfertas';

function MostrarOfertas() {

    const { ofertas } = useContext(contextoOfertas)

    return (
        <ul>
            { ofertas.map(
                oferta => 
                <li>
                    <p><strong>{oferta.titulo}</strong></p>
                    <p>{oferta.descripcion}</p>
                </li>
            ) }
        </ul>
    )
}

export default MostrarOfertas