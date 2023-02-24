 let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("saveEle")


let count  = 0;
function increment(){
   count = count + 1
   countEl.innerText = count
}

function save(){
   let saveStr= count + " - "
   saveEl.textContent += saveStr
   countEl.textContent =0


}
