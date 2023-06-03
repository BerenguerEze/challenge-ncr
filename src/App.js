import Footer from "./components/footer.jsx"
import Header from './components/header.jsx';
import AccountCard from "./components/account_card.jsx"
import AccountInfo from "./components/account_info.jsx";
import React, { useState } from 'react';
import './App.css';


function App() {
  const [mostrarAccountInfo, setMostrarAccountInfo] = useState(false);

  const cambiarComponente = () => {
    setMostrarAccountInfo(!mostrarAccountInfo);
  };

  const accountData = [
    { id: 1, nombre: 'Cuenta 1' },
    { id: 2, nombre: 'Cuenta 2' },
    { id: 3, nombre: 'Cuenta 3' },
    // Agrega más objetos según necesites
  ];

  return (
    <>
      <Header />
      <div>
        <p>Consulta de Saldo</p>
        <h4>Seleccione la cuenta a consultar</h4>
      </div> 
      {mostrarAccountInfo ? (
        <AccountInfo />
      ) : (
        <section className={"Grid"}>
          {accountData.map((account) => (
            <AccountCard
              Nro={account.id}
              tipoCuenta={account.nombre}
              onClick={cambiarComponente}
            />
          ))}
        </section>  
      )}
      <Footer onClick={cambiarComponente} />
    </>    
  );
}

export default App;
