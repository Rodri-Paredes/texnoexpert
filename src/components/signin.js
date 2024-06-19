import React, { useState } from 'react';
import './signin.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './../images/mochilahiperx 1.png'; 

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bGppd3Nka3Jzc25jbHFmc2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3NTE4MDEsImV4cCI6MjAzNDMyNzgwMX0.kkiCOYG2K_fkA35aCN0ZQJZzksd9ZxJD32XXEbVQcso';
        const url = `https://zyljiwsdkrssnclqfslp.supabase.co/rest/v1/users?email=eq.${email}&password=eq.${password}&apikey=${apiKey}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) throw new Error('Error en la autenticación');

            const data = await response.json();
            if(data.length===0){
              throw new Error('Error en la autenticación');
            }
            else{
              navigate('/dashboard');
            }
            console.log('Success:', data);
        } catch (err) {
            console.error('Error:', err);
            setError('Falló el inicio de sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signin-container">
            <img src={backgroundImage} alt="Login Background" className="signin-background-image" />
            <form onSubmit={handleSubmit} className="signin-form">
                <h2>Sign In</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Cargando...' : 'Iniciar Sesión'}
                </button>
            </form>
        </div>
    );
}

export default SignIn;
