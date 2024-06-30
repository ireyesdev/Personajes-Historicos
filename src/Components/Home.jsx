import React from 'react'
import Card from './Card';
import HomeLogo from '../asset/logos/Home-Logo.png';
import '../styles/Home.css';

function Home() {
  return(
    
    <div className="home-container">
      <div className='logo-home-container'>
        <img className='logo-home' src={HomeLogo} alt="Logo Myneflow" />
      </div>
      <Card title="Prueba Técnica">
        <p className="m-1">
          Desarrollar una aplicación web que permite gestionar información sobre personajes historicos.
        </p>
        <p>
          Utiliza <strong>React</strong> como libreria base y <strong>Zustand</strong> para el manejo de estado.
        </p>
      </Card>
    </div>
  );
};
export default Home;
