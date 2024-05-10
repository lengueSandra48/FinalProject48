//Les variables dont on a besoin
var sp, btn_start, btn_stop,t,ms,s,mn,h;

//Fonction pour initialiser les variables quand la page se charge

window.onload = function() {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s = 0, mn = 0,h = 0;
}

//Mettre en place le compteur
function update_chrono() {
    ms +=1;
    if (ms == 10) {
        ms = 1;
        s+= 1;
    }
    if (s == 60) {
        s = 0;
        mn += 1;
    }
    if (mn == 60) {
        mn = 0;
        h += 1;
    }
    //Inserer des valeurs dans les span
    //[0] permet de selectioner le premier span 
    // [1]------------------------le deuxieme span ....
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "mn";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

//Mettre en la fonction du button start
 function start() {
    //Cette ligne de code execute la fonction update_chrono() toutes les 100ms
    t = setInterval(update_chrono,100);
    btn_start.disabled = true;
 }

 //stopper le chrono

 function stop() {
    clearInterval(t);
    btn_start.disabled = false;
 }

 //Initialiser les valeurs du compteur

 function reset() {
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0,s = 0,mn = 0, h = 0;
    //insérer ces nouvelles valeurs dans les spans
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "mn";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
 }
