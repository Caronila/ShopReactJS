import React from 'react';
import './Home.css'; 
import Productos from './Productos';


const Home = () => {
    return (

        <div>
            <h1 className='homeT'><i className="bi bi-bag-heart-fill"></i> Te damos la bienvenida a nuestra tienda</h1>

            <Productos/>
        </div>

    );
}

export default Home;
