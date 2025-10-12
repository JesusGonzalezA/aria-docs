import { useEffect, useRef, useState } from "react";

export const BasketResults = () => {
  const [pause, setPause] = useState(true);
  const [result, setResult] = useState({
      0: { name: 'Real Madrid', points: 0 },
      1: { name: 'Unicaja', points: 0}
  });
  const interval = useRef(null);

  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    if (pause) {
        if (interval.current) {
            clearInterval(interval.current);
            interval.current = null;
        }
        return;
    }

    interval.current = setInterval(() => {
      const teamIndex = Math.floor(Math.random() * 2); // 0 o 1
      const points = Math.floor(Math.random() * 3) + 1; // 1, 2 o 3

      setResult(prev => ({
        ...prev,
        [teamIndex]: {
            ...prev[teamIndex],
            points: prev[teamIndex].points + points
        }
      })
    );
      setLastUpdate(`${result[teamIndex].name} anotó ${points} punto${points > 1 ? "s" : ""}!`);
    }, 5000);

    return () => {
        clearInterval(interval.current);
        interval.current = null;
    }
  }, [pause]);

  return (
    <section
      aria-label="Resultado del partido de baloncesto"
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
      <h5 style={{ textAlign: "center", color: "#333", fontSize: "2rem" }}>Marcador en Vivo 🏀</h5>
     
      <button
        onClick={() => setPause(!pause)}
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
      >
        {pause ? "Reanudar partido ▶️" : "Pausar partido ⏸️"}
      </button>

      <article
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: "1.5rem",
          marginTop: "1rem",
          fontWeight: "bold",
          color: "#222"
        }}
      >
        {/* <div role="status"> */}
        {/* <div aria-live="polite" aria-atomic="true"> */}
          <div>
            <span>{result[0].name}</span>
            <div>{result[0].points}</div>
          </div>
          <span style={{ fontSize: "2rem" }}>—</span>
          <div>
            <span>{result[1].name}</span>
            <div>{result[1].points}</div>
          </div>
        {/* </div> */}
      </article>

      <div
        role="status"
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem",
          backgroundColor: "#dff0d8",
          color: "#3c763d",
          borderRadius: "8px",
          textAlign: "center",
          fontSize: "1rem",
        }}
      >
        {lastUpdate}
      </div>
    </section>
  );
};
