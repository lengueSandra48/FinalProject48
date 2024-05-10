const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur
let resultat
let choixOrdinateur

//Evenement 'click sur les buttons'
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e) =>{
    //Recuperation de l'id du button cliqué 
    choixUtilisateur = e.target.id;
    //On recupere l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src ="${choixUtilisateur}.png">`;
    generer_choix_ordinateur() 
    verification()
}))

//Function pour generer le choix de l'ordinateur 

function generer_choix_ordinateur() {
    random = Math.floor(Math.random()*3) +1 // genere un nombre compris entre 1 et 3
    if (random === 1) {
        choixOrdinateur = "Pierre"     
    }
    if (random === 2) {
        choixOrdinateur = "Papier"     
    }
    if (random === 3) {
        choixOrdinateur = "Ciseaux"     
    }
    //On recupere l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src ="${choixOrdinateur}.png">`;
}

//Function pour verifier si le joueur a gagne ou pas

function verification() {
    if (choixUtilisateur === choixOrdinateur) {
        resultat = "Egalité !";   
    }

    // LEs cas où le joueur perd
    if (choixUtilisateur === "Pierre" && choixOrdinateur === "Papier") {
        resultat ="Perdu !"
    }
    if (choixUtilisateur === "Papier" && choixOrdinateur === "Ciseaux") {
        resultat ="Perdu !"
    }
    if (choixUtilisateur === "Ciseaux" && choixOrdinateur === "Pierre") {
        resultat ="Perdu !"
    } 

    //Les cas où le joueur gagne
    if (choixUtilisateur === "Pierre" && choixOrdinateur === "Ciseaux") {
        resultat = "Gagné !"  
    }
    if (choixUtilisateur === "Ciseaux" && choixOrdinateur === "Papier") {
        resultat = "Gagné !"  
    }
    if (choixUtilisateur === "Papier" && choixOrdinateur === "Pierre") {
        resultat = "Gagné !"  
    }

    contenantResultat.innerText = resultat
}


