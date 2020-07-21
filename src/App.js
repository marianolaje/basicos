import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {

  //crear listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa', precio: 50 },
    { id: 2, nombre: 'Remera', precio: 30 },
    { id: 3, nombre: 'Jean', precio: 80 },
    { id: 4, nombre: 'Malla', precio: 20 }
  ]);

  //carrito de compras
  const[carrito, setCarrito] = useState([]);

  //obtener año actual
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
        <Header titulo="Hola Mundo"/>
        <div>
          <h1>Lista de productos</h1>
          {productos.map(producto => (
            <ul><Producto
              key={producto.id}
              producto={producto}
              productos={productos}
              carrito={carrito}
              setCarrito={setCarrito}
            /></ul>
          ))}
        </div>
        <Carrito
          carrito={carrito}
          setCarrito={setCarrito}
        />
        <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
