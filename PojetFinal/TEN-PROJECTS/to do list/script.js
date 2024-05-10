var addTodoButton = document.getElementById('addTodo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addTodoButton.onclick = function () {
    //Verifier si l'input n'est pas vide
    if (inputField.value !== "") {
        //Si l'input n'est pas vide créer un paragraphe
        var paragraph = document.createElement('p');

    }
    //Valoriser ce paragraph avec le contenu de l'input
    paragraph.innerText = inputField.value;

    //stylisé  le paragraph
    paragraph.classList.add('paragraph_style');

    //Inserer le paragraph dans l'element toDoContainer

    toDoContainer.appendChild(paragraph);

    // Vider l'input quand le paragraph est ajouté

    inputField.value = "";

    //barré le paragraph quand on clique dessus
    paragraph.addEventListener('click',function () {
        paragraph.classList.add('paragraph_click');
    })

    // Supprimer la tâche quand on double click dessus
    paragraph.addEventListener('dblclick',function () {
        toDoContainer.removeChild(paragraph);
    })
}