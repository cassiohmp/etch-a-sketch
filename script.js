let grid = document.getElementById('grid')
createGridButton.addEventListener('click', createGrid)


function createGrid() {
    // if (rows.value > 100 || columns.value > 100) {
    //     alert("Limit: 100 rows/columns")
    //     return
    // }
    // if (rows.value < 0 || columns.value < 0) {
    //     alert("bruh, really?")
    //     return
    // }

    grid.innerHTML = ''

    gridWidth = parseInt(getComputedStyle(grid).getPropertyValue('width'), 10);
    gridHeight = parseInt(getComputedStyle(grid).getPropertyValue('height'), 10);

    for (let i = 0; i < squares.value; i++) {
        row = document.createElement('div')
        row.style.height = gridHeight / squares.value + "px"
        grid.appendChild(row)
        for (let j = 0; j < squares.value; j++) {
            createPixel()
        }
    }
}

function createPixel() {
    pixel = document.createElement('div')
    pixel.classList.add('pixel')
    pixel.style.width = gridWidth / squares.value + "px"
    pixel.style.height = gridHeight / squares.value + "px"

    row.appendChild(pixel)
    pixel.addEventListener('mouseover', toogleColor)
}

function toogleColor() {
    this.style.backgroundColor = 'black'
}

function clearGrid() {
    grid.innerHTML = ''
}