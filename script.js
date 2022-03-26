const container = document.querySelector('.container');

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

function hoverChange(e) {
    e.style.cssText='background-color: red;';
    container.appendChild(e);
}