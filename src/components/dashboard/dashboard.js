import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import myImage from '../../images/i9intel.png';
import myImage1 from '../../images/portada 1.png';
import mochila from '../../images/mochilahiperx 1.png';


function Dashboard() {
  return (
    <div>
      <div className="rectangulo-negro">
        <div className="texto-derecha">
          <Link to="/login" className="subrayado">Sign Up</Link>
          <span className="subrayado">Global | Es</span>
        </div>
      </div>
      <nav className="navegador">
      <ul className="menu-horizontal">
        <li><Link to="/componentes">Componentes</Link></li>
        <li><Link to="/ofertas">Ofertas</Link></li>
        <li><Link to="/asistencia">Asistencia</Link></li>
      </ul>
    </nav>
      <div className="contenido-principal">
        <img src={myImage1} className="bg-image" alt="Imagen principal" />
        <div className="contenido-texto">
          <div className="titulo">
            <span>HYPERX</span><br />
            <span>ALLOY RISE</span>
          </div>
          <div className="descripcion">
            <span>Como el teclado mecánico gaming sin </span><br />
            <span>herramientas más personalizable del </span><br />
            <span>mercado, el teclado HyperX Alloy Rise </span><br />
            <span>lleva la personalización al siguiente nivel</span>
          </div>
          <button className="boton-principal">COMPRAR AHORA</button>
        </div>
      </div>
      <div className='carruselContainer'>
          <Carrusel />
          <Carrusel />
          <Carrusel />
          <Carrusel />
      </div>

      <ProductoDestacado />
    </div>
  );
}

function Carrusel() {
  return (
    <div className='carrusel'>
     <a href="#">
          <img src={myImage} className='imageCarrusel' alt="Procesador Intel Core i9" />
          <p>Procesador Intel Core i9 12Gen</p>
        </a>
      
    </div>
  );
}

function ProductoDestacado() {
  return (
    <div className="mochilaHiperx">
      <img src={mochila} alt="Mochila HyperX" height="500" width="500" />
      <div className="hyperxDelta">
        <h2>HYPERX DELTA</h2>
      </div>
      <div className="textoMochila">
        <p>Mochila elegante de uso diario para tu equipo de juego</p>
      </div>
      <button className="boton-mochila">COMPRAR AHORA<span className="arrow-icon">➔</span></button>
    </div>
  );
}

export default Dashboard;
