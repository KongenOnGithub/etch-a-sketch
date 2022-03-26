const container = document.querySelector('.container');

for (i=0; i<16; i++) {
    let divNum= ""+i;
    const newDiv = document.createElement('div');
    newDiv.classList.add(`box`, `${divNum}`);
    for (j=0; j<16; j++) {
      const newNewDiv = document.createElement('div');
      newNewDiv.classList.add(`inside`, `inner${j}`);
      newDiv.appendChild(newNewDiv);
    }
    container.appendChild(newDiv);
}