const gridContainer = document.querySelector('#grid-container');

for (let i = 0; i < 16*16; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "grid-square")
    gridSquare.setAttribute("id", `grid-square-${i}`)
    gridContainer.appendChild(gridSquare)
    
    gridSquare.addEventListener("mouseover", () => {
        gridSquare.classList.add("on-hover")
    });
}