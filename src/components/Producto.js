import React from 'react';

const Producto = ({producto, productos, carrito, setCarrito}) =>  {

  const {id, nombre, precio} = producto;

  //agregar producto al carrito como function
  const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id)[0];
    setCarrito([
      ...carrito,
      producto
    ])
  }

  //eliminar producto del carrito
  const eliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);
    setCarrito(productos)
  }

  return(
    <li>
      Nombre: {nombre}, ${precio} -
      {productos
        ?
          (
            <button
              type="button"
              onClick={ () => seleccionarProducto(id)}>Comprar
            </button>
          )
        :
          (
            <button
              type="button"
              onClick={ () => eliminarProducto(id)}>Eliminar
            </button>
          )
      }
    </li>
  )
}

export default Producto;
