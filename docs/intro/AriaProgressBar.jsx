export const AriaProgressBar = () => {
  return (
    <div style={{ 
      marginBottom: "16px",
      border: "solid 1px gray",
      borderRadius: "5px",
      padding: "10px"
    }}>
      <span id="file_progress_label">Progreso de la subida del archivo</span>
      <div
        role="progressbar"
        aria-labelledby="file_progress_label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="50"
        style={{
          marginLeft: "4px",
          display: "inline-block",
          width: "150px",
          height: "8px",
          backgroundColor: "#eee",
          border: "1px solid #aaa",
          borderRadius: "4px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "#0048ffff",
            height: "100%",
            width: `50%`,
          }}
        ></div>
      </div>
    </div>
  );
}