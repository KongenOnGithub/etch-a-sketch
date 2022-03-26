const container = document.querySelector('.container');
const button = document.querySelector('.newbtn')
button.addEventListener('click',newGrid);

function newGrid() {
    removeAllChildNodes(container);
    let gridSize= parseInt(prompt("what grid size would you like? you can't go over 100 and if you type something else it will default to 16"));
    if(gridSize>100||gridSize===NaN){
      gridSize= 16;
    }
    createGrid(gridSize);
}

function createGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i=0; i<size; i++) {
        for (j=0; j<size; j++) {
          const newDiv = document.createElement('div');
          newDiv.classList.add(`square`);
          
          let height= (960/size);
          newDiv.style.cssText=`height: ${height}px;`
          container.appendChild(newDiv);
          newDiv.addEventListener('mouseover', function(event){
              event.target.classList.add("hovered");
            } );
          newDiv.addEventListener('mouseout', function(event){
              event.target.classList.remove("hovered")
            });
          
        }
    }
}
createGrid(16);


function removeAllChildNodes(parent) {
   while(parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}