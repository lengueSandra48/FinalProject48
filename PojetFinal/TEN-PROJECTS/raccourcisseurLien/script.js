let error = document.querySelector(".error_message");
let longLink = document.querySelector(".long_link");
let short = document.querySelector(".result");

function shortLinkFunct(){
    //Verification input
    if (!longLink.value == "") {
        //vider l'erreur
        error.innerHTML = "";

        //connection API
        let url = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)}`;//lien API en description
        fetch(url)
            .then(Response => Response.text())
            .then(data => short.innerHTML = data);
            //afficher le resultat 
            short.style.display = "block"

            if (short.innerHTML.length === 0) {
                short.innerHTML = "Lien non valide !"
            }

    } else {
        //error
        error.innerHTML = "Veuillez remplir le champ !";
        short.style.display = "none";
    }    
}


