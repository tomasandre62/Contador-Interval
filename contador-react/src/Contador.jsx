import React, { useState, useEffect } from 'react';

function ContadorComponente( Props ) {
  const [contador, setContador] = useState(Props.valorInicial.toString().padStart(6, '0'));

  useEffect(() => {
    const intervalo = setInterval(() => {
      const nuevoContador = (parseInt(contador) + 1).toString().padStart(6, '0');
      setContador(nuevoContador);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [contador]);

  return (
    <div className='Contador'>
      ⏱
      {contador}
    </div>
  );
}

export default ContadorComponente;