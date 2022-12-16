let addBtn = document.getElementById("addToDo");
let inputText = document.getElementById("inputText");
let toDoContainer = document.getElementById("toDoContainer");
let clearToDo = document.getElementById("clearToDo");


addBtn.addEventListener("click", function(){
    let newP = document.createElement("p");
    newP.classList.add("paragraphStyle")
    toDoContainer.appendChild(newP);
    newP.innerText = inputText.value;
    inputText.value=""

    newP.addEventListener("click", function(){
        newP.style.textDecoration="line-through"
    })

    newP.addEventListener("dblclick", function(){
        toDoContainer.removeChild(newP)
    })

    clearToDo.addEventListener("click", function(){
        newP.remove();
    })

})