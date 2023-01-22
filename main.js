// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// When a color is clicked in the `#palette`, the `#current-color` element should have its background will shift to that color. For example, if you select the green circle in the `#palette`, the `#current-color` element's background should change to be green.

// This area willl essentially select, then assign what we are looking for the aesthetic change to do
const currentColor = document.querySelector("#current-color");
const palette = document.querySelectorAll(".color");
console.log(palette);

// This area will essentially tell the computer what action we are listening for from the user. and what to do with the background
palette.forEach((shade) => {
  shade.addEventListener("click", (event) => {
    currentColor.style.background = shade.style.background;
  });
});


// This logic is choosing the cell and then with each cell we are telling the computer that when the user clicks an action should occur. 
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  });
});
console.log(cells);
// - [ ] When you click on a `.cell`, its background should change to match the background of `#current-color`.