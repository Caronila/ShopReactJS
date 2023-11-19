import React from 'react';
import './Productos.css';

const Productos = () => {
  return (
    <main className='productos'>
    <div className="card-deck">
      <div className="card">
        <img className="card-img-top" src="src/assets/producto1.jpg" alt="Producto 1" />
        <div className="card-body">
          <h5 className="card-title">Producto 1</h5>
          <p className="card-text">
            descripción de producto 1
          </p>

          <button type="button" className="btn btn-primary">
            Comprar
          </button>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src="src/assets/producto4.jpg" alt="Producto 2" />
        <div className="card-body">
          <h5 className="card-title">Producto 2</h5>
          <p className="card-text">
            descripción de producto 2
          </p>

          <button type="button" className="btn btn-primary">
            Comprar
          </button>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="src/assets/producto3.jpg" alt="Producto 3" />
        <div className="card-body">
          <h5 className="card-title">Producto 3</h5>
          <p className="card-text">
          descripción de producto 3
          </p>

          <button type="button" className="btn btn-primary">
            Comprar
          </button>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="src/assets/producto5.jpg" alt="Producto 4" />
        <div className="card-body">
          <h5 className="card-title">Producto 4</h5>
          <p className="card-text">
          descripción de producto 4
          </p>

          <button type="button" className="btn btn-primary">
            Comprar
          </button>
        </div>
      </div>

    </div>
    </main>
  );
}

export default Productos;
