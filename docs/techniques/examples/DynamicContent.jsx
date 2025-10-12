import { useState } from 'react';

export const DynamicContent = () => {
  const [data, setData] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  const handleLoadData = () => {
    setStatusMessage('Cargando datos...');
    setData([]);

    // Simula una llamada al servidor
    setTimeout(() => {
      const nombres = ['Ana', 'Luis', 'Carlos'];
      setData(nombres);
      setStatusMessage('Los datos se han cargado. Consulta la tabla llamada resultados.');
    }, 2000);
  };

  return (
    <section
      aria-label="Cargando datos dinámicamente"
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
        backgroundColor: "#f0f4f8",
        borderRadius: "12px",
        maxWidth: "400px",
        margin: "2rem auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}
    >
      <button 
        onClick={handleLoadData}
        style={{
          display: "block",
          margin: "1rem auto",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >Cargar datos</button>

      <div role="alert"
        style={{
          "clip": "rect(0 0 0 0)",
          "clipPath": "inset(50%)",
          "height": "1px",
          "overflow": "hidden",
          "position": "absolute",
          "whiteSpace": "nowrap",
          "width": "1px",
        }}
      >
        {statusMessage}
      </div>

      {/* Tabla de resultados */}
      <table aria-label="resultados" border="1" style={{color: "black"}}>
        <caption>Resultados</caption>
        <thead>
          <tr><th>Nombre</th></tr>
        </thead>
        <tbody>
          {data.map((nombre, index) => (
            <tr key={index}><td>{nombre}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
