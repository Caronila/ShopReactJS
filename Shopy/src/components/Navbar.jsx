import './Navbar.css'
import React from 'react';
import Home from './Home';
import Productos from './Productos';
import Conocenos from './Conocenos';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';


const NavBar = () => {
    return (
        <Router>
        <div>
        
          <nav>
            <ul>
              <li>
                <NavLink to="/" className="active"><i class="bi bi-house"></i>Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/Productos" className="active"><i class="bi bi-shop-window"></i>Productos</NavLink>
              </li>
              <li>
                <NavLink to="/Conocenos" className="active"><i class="bi bi-heart-fill"></i>Conócenos</NavLink>
              </li>
            </ul>
          </nav>
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Conocenos" element={<Conocenos />} />
          </Routes>
        </div>
      </Router>
      
    );
}

export default NavBar;


