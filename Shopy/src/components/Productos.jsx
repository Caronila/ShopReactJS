import React, { useState } from 'react';
import './Productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([
    { id: 1, comprado: false, nombre: 'Aceite de anana', descripcion: 'Exquisito aceite organico de anana y frutas.', precio: '$5', SKU: '123456', cantidadDisponible: 10 },
    { id: 2, comprado: false, nombre: 'Kit cosmetica', descripcion: 'Obtene un kit especialmente para el cuidado de la piel.', precio: '$30', SKU: '124456', cantidadDisponible: 10 },
    { id: 3, comprado: false, nombre: 'Cuidado del cabello', descripcion: 'Todo lo que necesitas para el cuidado de tu cabello.', precio: '$40', SKU: '123455', cantidadDisponible: 10 },
    { id: 4, comprado: false, nombre: 'Para regalar', descripcion: 'Caja ideal para regalar a esa persona especial.', precio: '$70', SKU: '133456', cantidadDisponible: 10 },
  ]);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCompraClick = (id) => {
    const productoIndex = productos.findIndex((producto) => producto.id === id);

    setProductos((prevProductos) => {
      const nuevosProductos = [...prevProductos];
      nuevosProductos[productoIndex] = { ...nuevosProductos[productoIndex], comprado: true };
      return nuevosProductos;
    });

    setShowSuccessMessage(true);

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <main className='productos'>
      <h1>Nuestros productos</h1>
      <div className="card-deck">
        {productos.map((producto) => (
          <div className="card" key={producto.id}>
            <img className="card-img-top" src={`src/assets/producto${producto.id}.jpg`} alt={`Producto ${producto.id}`} />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <ul className='descripcion'>
                <li className='listas'>Precio: {producto.precio}</li>
                <li className='listas'>SKU: {producto.SKU}</li>
                <li className='listas'>Cantidad disponible: {producto.cantidadDisponible}</li>
              </ul>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleCompraClick(producto.id)}
                disabled={producto.comprado}
              >
                {producto.comprado ? '¡Compra realizada!' : 'Comprar'}
              </button>
            </div>
          </div>
        ))}
      </div>
      {showSuccessMessage && (
        <div className='success-message'>
          ¡Gracias por su compra! La página se recargará en unos segundos.
        </div>
      )}
    </main>
  );
}

export default Productos;
