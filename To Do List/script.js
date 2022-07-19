let addToDoButton = document.getElementById("addToDo");

let toDoContainer = document.getElementById('toDoContainer');

let inputText = document.getElementById("inputText");

let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener("click", function(){
    let list = document.createElement("li");
    list.classList.add('listStyle');
    toDoContainer.appendChild(list);
    list.innerHTML = inputText.value;
    inputText.value = "";
    list.addEventListener('click', function(){
      list.style.textDecoration = 'line-through';
    });
    list.addEventListener("dblclick", function(){
       // list.style.display = 'none'; // (*Bunu ben yazdım)
       toDoContainer.removeChild(list); // (Videoda bu vardı)
    });

    clearToDo.addEventListener('click', function(){
        // list.style.display = 'none'; // consoldan silmez
        list.remove(); // consoldan da siler
    });
})


