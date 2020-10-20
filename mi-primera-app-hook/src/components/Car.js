import React, { useState, useEffect } from "react";

export default function Car() {
  const [started, setStarted] = useState(false);
  const [countKm, setCountKm] = useState(0);

  useEffect(() => {
    document.title = `Coche ${started}`;
  }, [started]);

  const checkStartedCar = () => {
    if (started) {
      return <span style={{ color: "green" }}>Encendido</span>;
    }
    return <span style={{ color: "red" }}>Apagado</span>;
  };

  const increaseKm = (num) => {
    if (started) {
      setCountKm(countKm + num);
    } else {
      alert("El coche esta apagado");
    }
  };

  return (
    <div>
      <h2>Nuestro coche esta: {checkStartedCar()}</h2>
      <h2>Kilometros recorrridos: {countKm} km</h2>
      <button
        onClick={() => {
          setStarted(!started);
        }}
      >
        Encender / Apagar
      </button>
      <button
        onClick={() => {
          increaseKm(5);
        }}
      >
        Incrementar Km
      </button>
    </div>
  );
}
