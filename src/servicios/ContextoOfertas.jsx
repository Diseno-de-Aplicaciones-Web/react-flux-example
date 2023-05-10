import { createContext, useState } from "react"

const contextoOfertas = createContext()

function ServicioOfertas({children}) {

    const [ ofertas, setOfertas] = useState([
        {
          titulo: "Calcetíns usados",
          descripcion: "Bo estado. Pouco uso."
        }
      ])

    function engadirOferta(oferta) {
        const novasOfertas = [...ofertas]
        novasOfertas.push(oferta)
        setOfertas(novasOfertas)
    }

    const contidoContexto = {
        ofertas,
        engadirOferta,
    }

    return(
        <contextoOfertas.Provider value={contidoContexto}>
            {children}
        </contextoOfertas.Provider>
    )
    
}

export {
    ServicioOfertas,
    contextoOfertas
}