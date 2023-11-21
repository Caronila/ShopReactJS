import React, { useState, useEffect } from 'react';
import './Productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([
    { id: 1, comprado: false },
    { id: 2, comprado: false },
    { id: 3, comprado: false },
    { id: 4, comprado: false },
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
              <h5 className="card-title">{`Producto ${producto.id}`}</h5>
              <p className="card-text">{`Descripción de producto ${producto.id}`}</p>
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
