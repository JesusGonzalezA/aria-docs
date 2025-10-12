import { useEffect, useRef, useState } from "react";

const sampleNotifications = [
  "📢 Nuevo mensaje de soporte técnico.",
  "🔔 Recordatorio: reunión a las 10:00 AM.",
  "✅ Tu informe ha sido enviado correctamente.",
  "⚠️ Atención: se detectó actividad inusual.",
  "🎉 ¡Has ganado un premio sorpresa!"
];

const NotificationProvider = ({ interval, pause, listRef }) => {
  useEffect(() => {
    if (!listRef.current) return;

    if (pause) {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
      return;
    }

    interval.current = setInterval(() => {
      const message = sampleNotifications[Math.floor(Math.random() * sampleNotifications.length)];
      const messageEl = document.createElement("div");
      messageEl.textContent = message;
      messageEl.style.color = "black";
      messageEl.style.marginBottom = "0.5rem";

      listRef.current.appendChild(messageEl);
    }, 5000);

    return () => {
      clearInterval(interval.current);
      interval.current = null;
    };
  }, [pause, listRef]);

  return (
    <div
      style={{ paddingLeft: "1rem", marginTop: "0.5rem", listStyle: "none" }}
      aria-live="assertive"
      // aria-atomic="true"
      aria-atomic="false"
      // aria-relevant="removals"
      aria-relevant="additions"
    >
      Notificaciones

      <div ref={listRef}></div>
    </div>
  );
};

export const PushNotifications = () => {
  const [pause, setPause] = useState(true);
  const interval = useRef(null);
  const listRef = useRef(null);

  const clearHistory = () => {
    if (listRef.current) {
      listRef.current.innerHTML = "";
    }
  };

  return (
    <section
      aria-label="Simulador de notificaciones push"
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "12px",
        maxWidth: "500px",
        margin: "2rem auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h5 style={{ textAlign: "center", color: "#333", fontSize: "2rem" }}>
        Notificaciones Push 🔔
      </h5>

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
        {pause ? "Activar notificaciones ▶️" : "Pausar notificaciones ⏸️"}
      </button>

      <button
        onClick={clearHistory}
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
        Borrar historial
      </button>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem",
          backgroundColor: "#e6f7ff",
          color: "#00529b",
          borderRadius: "8px",
          textAlign: "center",
          fontSize: "1rem"
        }}
      >
        <NotificationProvider
          interval={interval}
          pause={pause}
          listRef={listRef}
        />
      </div>
    </section>
  );
};
