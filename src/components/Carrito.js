import React from 'react';
import './Carrito.css'
import Producto from './Producto'


const Carrito = ({carrito, setCarrito}) =>  {
  return(
    <div className="carrito">
      <h2>Tu carrito de Compras</h2>
      {carrito.length===0
        ?
          <p>No hay elementos en el carrito</p>
        :
          carrito.map(producto=>(
            <Producto
              key={producto.id}
              producto={producto}
              carrito={carrito}
              setCarrito={setCarrito}
              />
          ))
      }
    </div>
  )
}

export default Carrito;
