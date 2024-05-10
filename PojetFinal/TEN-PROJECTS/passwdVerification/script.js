//Definir les variables
var myInput = document.getElementById('psw')
var letter = document.getElementById('letter')
var capital = document.getElementById('capital')
var number = document.getElementById('number')
var length = document.getElementById('length')
var div = document.querySelector('.test')
let label2 = document.getElementById('label2')
let isExistImage = false
let isClosed = true
var url = "eyes/openedEyes.png"
var url2 = "eyes/closedEyes.png"
let isInputTouched =false


window.addEventListener('click', (e)=>{
   if (isInputTouched === false ) {
        document.getElementById('message').style.display ="none" 
   }
   isInputTouched =  false
})

   
//lorsque l'utilisateur clique sur le champ du mot de passe , afficher la boite message

myInput.onfocus = function () {
    document.getElementById('message').style.display ="block"
    isInputTouched =  true
}
// Lorsque l'utilisateur clique en dehors du champ du mot de passe, masquer la boite de message 

myInput.onclick = function () {
    isInputTouched =  true
}

myInput.onblur = function () {
    isInputTouched =  false
}

//Lorsque l'utilisateur commence a taper quelque chose dans le champ mot de passe

myInput.onkeyup = function (e) {
    //Apparition de l'oeil
    afficheImage(url,div)

    // valider les lettres miniscules
    var lowerCaseLetters = /[a-z]/g
    if (myInput.value.match(lowerCaseLetters)) {
        //si le mot de passe contient une lettre minuscule,"enlever la classe invalid et ajouter la classe valid" 
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    } else {
        // sinon "enlever la classe valid et ajouter la classe invalid" 
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }
    // valider les lettres majuscules
    var upperCaseLetters = /[A-Z]/g
    if (myInput.value.match(upperCaseLetters)) {
        //si le mot de passe contient une lettre majuscule,"enlever la classe invalid et ajouter la classe valid" 
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    } else {
        // sinon "enlever la classe valid et ajouter la classe invalid" 
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }
     // valider les nombres
     var numbers = /[0-9]/g
     if (myInput.value.match(numbers)) {
         //si le mot de passe contient un nombre,"enlever la classe invalid et ajouter la classe valid" 
         number.classList.remove('invalid');
         number.classList.add('valid');
     } else {
         // sinon "enlever la classe valid et ajouter la classe invalid" 
         number.classList.remove('valid');
         number.classList.add('invalid');
     }
     // valider la longueur
     if (myInput.value.length >= 8) {
         //si le mot de passe contient minimum 8 caracteres,"enlever la classe invalid et ajouter la classe valid" 
         length.classList.remove('invalid');
         length.classList.add('valid');
     } else {
         // sinon "enlever la classe valid et ajouter la classe invalid" 
         length.classList.remove('valid');
         length.classList.add('invalid');
     }
}

 function afficheImage(url,div){

    if ((!isExistImage)&& (myInput.value.length != 0)) {
        var img = document.createElement('img');         
        div.appendChild(img); 
        img.src = url; 
        isExistImage = true

        img.onclick = function (e) {

            if (isClosed) {
                img.src = url; 
                img.classList.remove("closedEyes")
                myInput.setAttribute('type','password')
                isClosed = false
            } else {
                img.src = url2; 
                isClosed = true
                img.classList.add("closedEyes")
                myInput.setAttribute('type','text')
            }
            isInputTouched =  true
        }

    }else if(myInput.value.length === 0){
        div.innerHTML = ''; 
        isExistImage = false
    }
}


  


