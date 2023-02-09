import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [compteur, setCompteur] = useState(0)
  const setValeur = () => {
    setCompteur(parseInt (prompt("valeur par defaut",0)))
  }


  return (
    <div className="App">
      <h1> COMPTEUR : {compteur} </h1>
      <button onClick={() => setCompteur(compteur + 1)}> + </button>
      <button onClick={() => setCompteur(compteur - 1)}> - </button>
      <button onClick={() => setCompteur(0)}> Remise a zéro </button>
      <button onClick={() => setValeur()}>Entrer une valeur par defaut</button>

    </div>
  );
}

export default App;
