const container = document.querySelector('.container');
const button = document.querySelector('.newbtn')
button.addEventListener('click',newGrid);

function newGrid() {
    removeAllChildNodes(container);
    let gridSize= parseInt(prompt("what grid size would you like? you can't go over 100"));
    if(gridSize>100){
      gridSize= 100;
    }
    createGrid(gridSize);
}

function createGrid(size){
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

for (i=0; i<16; i++) {
    for (j=0; j<16; j++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add(`square`, `row${i}`, `column${j}`);
      
      let width= (960/16)
      newDiv.style.cssText=`height: ${width}px;`
      container.appendChild(newDiv);
      newDiv.addEventListener('mouseover', function(event){
          event.target.classList.add("hovered");
          console.log("hovered")
        } );
      newDiv.addEventListener('mouseout', function(event){
          event.target.classList.remove("hovered")
        });
      
    }
}


function removeAllChildNodes(parent) {
   while(parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}