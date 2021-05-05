const gridContainer = document.querySelector("#grid-container");

let numOfTimes = 16**2;
for(let i = 0; i<numOfTimes; i++){
    const singlecell = document.createElement ("div");
    singlecell.textContent = "hello";
    singlecell.style.color = "white";
    singlecell.classList.add("bg-red");
    singlecell.addEventListener('click',() => { 
       alert("hello World");
    });
    gridContainer.appendChild(singlecell);
}