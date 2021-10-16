// Code for creating the cell containers and cells automatically, so there's not as much ugly hardcoded html

const col = document.getElementsByClassName("col");

let j = 0;
let cellNum = 0;

for(j; j < col.length; j++) { // col length should be 8

    let cellsDiv = document.createElement("DIV");
    cellsDiv.setAttribute("class", "cells");

    //console.log(col.length);
    //console.log(col[j]);
    col[j].appendChild(cellsDiv); // append the cells container to the column

    for(let i = 0; i < 32; i++) {
    
        let cellDiv = document.createElement("DIV");
        cellDiv.setAttribute("class", "cell");
        cellDiv.setAttribute("id", cellNum);
        cellDiv.setAttribute(`onclick`, `editText(${cellNum})`);

        cellNum++;
        console.log(cellNum);

        cellsDiv.appendChild(cellDiv);
    }
}

const cellsAmount = document.getElementsByClassName("cell").length;
console.log(cellsAmount + " solua");

function editText(id) {
    obj = document.getElementById(id);
    console.log(obj);
    let value = prompt("Syötä arvo:");
    obj.innerText = value;
}