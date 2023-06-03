import React, { useState } from 'react';
import Header from './components/header.jsx';
import AccountCard from './components/account_card.jsx';
import AccountInfo from './components/account_info.jsx';
import Footer from './components/footer.jsx';
import './App.css';

function ButtonChange({ onClick, mostrarMas }) {
  return (
    <button onClick={onClick}>
      {mostrarMas ? 'Mostrar menos' : 'Mostrar más'}
    </button>
  );
}

function App() {
  const [mostrarAccountInfo, setMostrarAccountInfo] = useState(false);
  const [mostrarMas, setMostrarMas] = useState(false);

  const cambiarComponente = () => {
    setMostrarAccountInfo(!mostrarAccountInfo);
  };

  const accountData = [
    { id: 1, nombre: 'Cuenta 1' },
    { id: 2, nombre: 'Cuenta 2' },
    { id: 3, nombre: 'Cuenta 3' },
    { id: 4, nombre: 'Cuenta 4' },
    { id: 5, nombre: 'Cuenta 5' },
    { id: 6, nombre: 'Cuenta 6' },
    { id: 7, nombre: 'Cuenta 7' },
    { id: 8, nombre: 'Cuenta 8' },
    { id: 9, nombre: 'Cuenta 9' },
    { id: 10, nombre: 'Cuenta 10' },
    // Agrega más objetos según necesites
  ];

  const mostrarMasElementos = () => {
    setMostrarMas(!mostrarMas);
  };

  const mostrarAccountCards = mostrarMas
    ? accountData.slice(5)
    : accountData.slice(0, 5);

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
        <section className="Grid">
          {mostrarAccountCards.map((account) => (
            <AccountCard
              key={account.id}
              Nro={account.id}
              tipoCuenta={account.nombre}
              onClick={cambiarComponente}
            />
          ))}
          {accountData.length > 5 && (
            <ButtonChange
              onClick={mostrarMasElementos}
              mostrarMas={mostrarMas}
            />
          )}
        </section>
      )}
      <Footer onClick={cambiarComponente} />
    </>
  );
}

export default App;