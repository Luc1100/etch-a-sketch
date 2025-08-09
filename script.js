const gridContainer = document.querySelector('#grid-container');

function setUpGrid(size) {
    gridContainer.textContent = '';
    for (let i = 0; i < size*size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.setAttribute("class", "grid-square");
        gridSquare.setAttribute("id", `grid-square-${i}`);
        gridSquare.setAttribute("style", `width: ${1/size * 100}%`)
        gridContainer.appendChild(gridSquare);
        
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.setAttribute("style", `width: ${1/size * 100}%; background-color: ${currColor};`)
        });
    }
}

const gridSizeBtn = document.querySelector("#grid-size-btn");
gridSizeBtn.addEventListener("click", () => {
    let size = prompt("Enter a grid size (1-100)");
    while (!(size <= 100)) {
        size = prompt("Size must be 100 or less!");
    }
    setUpGrid(size)
});

let currColor = "rgb(0,0,0,1)"

const colorBtns = document.querySelectorAll(".color-btn")
colorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        currColor = getComputedStyle(btn)['background-color'];
    });
});

setUpGrid(16);
