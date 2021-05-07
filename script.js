const gridContainer = document.querySelector("#grid-container");

let numOfTimes = 256;
for(let i = 0; i<numOfTimes; i++){
    const singlecell = document.createElement ("div");
    singlecell.textContent = ".";
    singlecell.style.color = "rgb(250, 2, 138) ";
    singlecell.classList.add("bg-red");
    singlecell.addEventListener('click',() => { 
        singlecell.classList.toggle("bg-cyan");
        singlecell.style.color = "hsl(249, 100%, 47%) ";
    });
    gridContainer.appendChild(singlecell);
}