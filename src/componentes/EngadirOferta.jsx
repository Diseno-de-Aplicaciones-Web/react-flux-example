import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { contextoOfertas } from "../servicios/ServicioOfertas"

function EngadirOferta() {

    const navigate = useNavigate()

    const { engadirOferta } = useContext(contextoOfertas)

    const [ titulo, setTitulo ] = useState("")
    const [ descripcion, setDescripcion ] = useState("")

    function manexadorTitulo(evento) {
        setTitulo(evento.target.value)
    }

    function manexadorDescripcion(evento) {
        setDescripcion(evento.target.value)
    }

    function manexadorEngadir() {
        engadirOferta({titulo,descripcion})
        navigate("/ofertas/")
    }

    return (
        <>
        <input
            type="text"
            value={titulo}
            placeholder="Introduce o título..."
            onInput={manexadorTitulo}
        />
        <input
            type="text"
            value={descripcion}
            placeholder="Introduce a descripción..."
            onInput={manexadorDescripcion}
        />
        <button onClick={manexadorEngadir}>Engadir</button>
        </>
    )
}

export default EngadirOferta