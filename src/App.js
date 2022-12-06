import './App.css';
import Logo from '../src/images/fcc_primary_large.svg';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const funcion1 = () => {
    setNumClics(numClics + 1);
  };

  const funcion2 = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={Logo} alt=''/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClic={ numClics } ></Contador>
        <Boton texto='Clic' esBotonDeClic={ true } manejarClic={ funcion1 } ></Boton>
        <Boton texto='Reiniciar' esBotonDeClic={ false } manejarClic={ funcion2 } ></Boton>
      </div>
    </div>
  );
}

export default App;
