// buttons for getting necessary greek letters to your clipboard
function clipboard(char) {
    let copied;
    if(char == "omega") {
        copied = "ω";
    } else if(char == "sigma") {
        copied = "Σ";
    } else if(char == "delta") {
        copied = "Δ";
    }
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(copied);
        }
      });
}

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

// 32, 64, 96, 128 ignoorataan
/*

33-65 = x

if x > 0 laitetaan 97, else 129

33+32=65
65+32=97
97+32=129

*/