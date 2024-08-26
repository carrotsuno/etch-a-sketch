const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");

function createGrid(rowsAndColumns) {
    
    for (row = 1; row <= rowsAndColumns; row++) {
        const newRow = document.createElement("div");
        newRow.classList.add("gridRow");
        container.appendChild(newRow);
        for (column = 1; column <= rowsAndColumns; column++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener('mouseover', () => {
                square.style.cssText = "background-color: green; transition: background-color 0.3s;"
            });
            newRow.appendChild(square);
        }
    }
}

function deleteGrid() {
    const rows = document.querySelectorAll("#container > div");

    rows.forEach((row) => {
        container.removeChild(row);
    })
}

resetButton.addEventListener('click', () => {
    const gridSize = prompt("Please enter new grid size between 2 and 99");
    if (gridSize > 100 || gridSize < 2) {
        console.log('ERROR! Please enter a valid grid size');
    }
    else{
        deleteGrid();
        createGrid(gridSize);
    }
})

createGrid(16);