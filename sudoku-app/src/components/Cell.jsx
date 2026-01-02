function Cell({ value, isSelected, onClick, row, col }) {
    const borderStyle = {
        borderTop: row % 3 === 0 ? "2px solid white" : "1px solid #999",
        borderLeft: col % 3 === 0 ? "2px solid white" : "1px solid #999",
        borderRight: col === 8 ? "2px solid white" : "1px solid #999",
        borderBottom: row === 8 ? "2px solid white" : "1px solid #999",
    };

    return (
        <div
            onClick={onClick}
            style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                cursor: "pointer",
                color: "goldenrod",
                backgroundColor: isSelected ? "#333" : "black",
                ...borderStyle,
            }}
        >
            {value !== 0 ? value : ""}
        </div>
    );
}

export default Cell;
