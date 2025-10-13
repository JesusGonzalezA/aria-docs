import { useRef } from "react";

export const Dialog = () => {
  const dialogRef = useRef(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <button
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-controls="example_dialog"
        style={{
          backgroundColor: "#0078d4",
          color: "white",
          border: "none",
          padding: "0.6rem 1rem",
          borderRadius: "6px",
          fontSize: "1rem",
        }}
      >
        Enviar formulario
      </button>

      <dialog
        ref={dialogRef}
        id="example_dialog"
        aria-modal="true"
        aria-labelledby="dialog_title"
        style={{
          border: "none",
          borderRadius: "8px",
          padding: "1.5rem",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 id="dialog_title" style={{ marginTop: 0 }}>
          Envío de formulario
        </h2>
        <p>¿Estás seguro de que quieres enviar el formulario?</p>
        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={closeDialog}
            style={{
              backgroundColor: "#ccc",
              border: "none",
              borderRadius: "6px",
              padding: "0.5rem 1rem",
              marginRight: "0.5rem",
            }}
          >
            Cancelar
          </button>
          <button
            onClick={closeDialog}
            style={{
              backgroundColor: "#0078d4",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "0.5rem 1rem"
            }}
          >
            Guardar
          </button>
        </div>
      </dialog>
    </div>
  );
}
