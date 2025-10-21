export const ProgressBar = () => {
    return (
        <div style={{ 
            marginBottom: "16px",
            border: "solid 1px gray",
            borderRadius: "5px",
            padding: "10px"
        }}>
            <label htmlFor="file_progress">Subida del archivo</label>
            <progress id="file_progress" min="0" max="100" value="50" style={{ marginLeft: "4px"}}/>
        </div>
    )
}