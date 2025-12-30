function cell({ value, isSelected, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                width: "40px",
                height: "40px",
                border: "1px solid gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                cursor: "pointer",
                backgroundColor: isSelected ? "#a0e0ff" : "#ffffff"
            }}
        >
            {value !== 0 ? value : ""}
        </div>
    )
}
export default Cell;