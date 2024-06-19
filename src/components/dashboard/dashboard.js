
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import myImage1 from '../../images/portada 1.png';
import procesador from '../../images/i9intel.png';
import tarjetaGrafica from '../../images/nvidia4090 1.png';
import ssd from '../../images/m 1.png';
import mochila from '../../images/mochilahiperx 1.png';
import microfono from '../../images/mochilahiperx 1.png';
import { ReactComponent as InstagramIcon } from '../../images/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../images/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../images/icons/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../images/icons/youtube.svg';
import { ReactComponent as TiktokIcon } from '../../images/icons/tiktok.svg';

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/componentes">Componentes</Link>
      <Link to="/ofertas">Ofertas</Link>
      <Link to="/asistencia">Asistencia</Link>
      <Link to="/login" className="sign-up">Sign Up | Global | Es</Link>
    </nav>
  );
}


function HeroSection() {
  return (
    <div className="hero-section">
      <img src={myImage1} alt="HYPERX ALLOY RISE" />
      <div className="hero-text">
        <h1>HYPERX ALLOY RISE</h1>
        <p>Como el teclado mecánico gaming sin herramientas más personalizable del mercado, el teclado HyperX Alloy Rise lleva la personalización al siguiente nivel.</p>
        <button>COMPRAR AHORA</button>
      </div>
    </div>
  );
}

function ProductCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://zyljiwsdkrssnclqfslp.supabase.co/rest/v1/products?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bGppd3Nka3Jzc25jbHFmc2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3NTE4MDEsImV4cCI6MjAzNDMyNzgwMX0.kkiCOYG2K_fkA35aCN0ZQJZzksd9ZxJD32XXEbVQcso';

      try {
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-carousel">
      {products.map(product => (
        <Link to={`/productos/${product.id}`} key={product.id}>
          <div className="product">
            <img src={product.image_url} alt={product.name} />
            <p>{product.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function FeaturedProducts() {
  return (
    <div className="featured-products">
      <div className="product-info">
        <img src={mochila} alt="Mochila HyperX" />
        <h2>HYPERX DELTA</h2>
        <p>Mochila elegante de uso diario para tu equipo de juego</p>
        <button>COMPRAR AHORA</button>
      </div>
      <div className="product-info">
        <img src={microfono} alt="Microfono HyperX" />
        <h2>HYPERX CASTER</h2>
        <p>Solución sencilla y sin herramientas para disfrutar de un equipo de retransmisión fácil de usar.</p>
        <button>COMPRAR AHORA</button>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <p className="footer-title">¡Únete a la #TecnoXFamily en Redes Sociales!</p>
      <p>Sé el primero en enterarte de nuestros nuevos lanzamientos cuando te unas a la Familia de TecnoX</p>
      <div className="social-icons">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <TiktokIcon />
        <YoutubeIcon />
      </div>
    </div>
  );
}


function Dashboard() {
  return (
    <div className="dashboard">
      <Navigation />
      <HeroSection />
      <ProductCarousel />
      <FeaturedProducts />
      <Footer/>
    </div>
  );
}

export default Dashboard;
