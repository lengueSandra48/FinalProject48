var copyBtn = document.getElementById("copy");


function getPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 16;
    var password = "";

    //genérer le mot de passe

    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
        //afficher le mot de passe

        document.getElementById("password").value = password;

        //Changer le style du button copier

        copyBtn.style.background = "#6c757d";
        copyBtn.style.color = "#fff";
    }

}

//Copier le mot de passe
function copyMDP(){

    var inputPassword = document.getElementById("password");

    //Verifier la longueur du mot de passe
    if (inputPassword.value.length == 16) {
        //copier le mot de passe
        inputPassword.select();
        document.execCommand("copy");

        //Changer le style du mot de passe copier
        copyBtn.style. backgroundColor = "transparent";
        copyBtn.style.color = "#000";
         
        //afficher une alert 
        alert('Mot de passe copier !');

    } else {
        //sinon
        alert('Veuillez générer un Mot de passe');
        
    }
}