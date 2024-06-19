import React, { useState, useEffect } from 'react';
import './ProductDetail.css';
import productImage from '../../images/mochilahiperx 1.png';
import { ReactComponent as InstagramIcon } from '../../images/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../images/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../images/icons/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../images/icons/youtube.svg';
import { ReactComponent as TiktokIcon } from '../../images/icons/tiktok.svg';
import { Link, useParams } from 'react-router-dom';

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
  function ProductDetail() {
    const { productId } = useParams();
    const [productInfo, setProductInfo] = useState([]);
    console.log(productId);
    const phoneNumber = '75767850';
    const message = encodeURIComponent("Hola, estoy interesado en comprar el producto."); 
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    useEffect(() => {
        
        const fetchData = async () => {
          const url = `https://zyljiwsdkrssnclqfslp.supabase.co/rest/v1/products?id=eq.${productId}&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bGppd3Nka3Jzc25jbHFmc2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3NTE4MDEsImV4cCI6MjAzNDMyNzgwMX0.kkiCOYG2K_fkA35aCN0ZQJZzksd9ZxJD32XXEbVQcso`;
    
          try {
            const response = await fetch(url, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setProductInfo(data[0]);
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        };
    
        fetchData();
      }, []);
    return (
      <div className="product-detail">
        <div className="product-navigation">
          <a href="/categorias">Comprar por Categoría</a>
          <a href="/plataformas">Comprar por Plataforma</a>
          <a href="/asistencia">Asistencia</a>
        </div>
        <div className="product-content">
          <div className="product-image">
            <img src={productInfo.image_url} alt="Mochila HyperX Delta" />
          </div>
          <div className="product-info">
            <h1>{productInfo.name}</h1>
            <ul>
              <li>{productInfo.description}</li>
              <li>${productInfo.price}</li>
            </ul>
            <div className="color-selection">
              <label>Seleccionar un color: </label>
              <select>
                <option>Negro</option>
              </select>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button>Comprar</button>
            </a>
            <p>SKU: B25C2AAA</p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

export default ProductDetail;
