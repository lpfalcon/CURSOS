import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>

  // STRICT MODE NO SE USA EN PRODUCCION
  // DETECTA PROBELMAS EN EL CICLO DE VIDA DE LOS COMPONENTES
  // LEGACY CODE ETC
);
