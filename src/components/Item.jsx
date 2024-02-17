import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.titulo} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>${producto.precio}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver producto</Link>
        </div>
    </div>
  )
}

export default Item