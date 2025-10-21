export const AriaProgressBar = ({
  value = 50,
  min = 0,
  max = 100,
  label = "Subida del archivo"
}) => {
  return (
    <div style={{ 
      marginBottom: "16px",
      border: "solid 1px gray",
      borderRadius: "5px",
      padding: "10px"
    }}>
      <span id="file_progress_label">{label}</span>
      <div
        role="progressbar"
        aria-labelledby="file_progress_label"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
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
            width: `${value}%`,
          }}
        ></div>
      </div>
    </div>
  );
}