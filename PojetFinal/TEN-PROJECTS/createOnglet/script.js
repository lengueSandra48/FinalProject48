function openOnglet(evt,name) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display ="none"; 
    }   
   tablinks = document.getElementsByClassName('tabLinks') ; 
   for(let i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace("active","") ;
    } 
    document.getElementById(name).style.display = "block" ;
    evt.currentTarget.className += " active";
}