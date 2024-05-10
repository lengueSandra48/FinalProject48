/**
 * Declaration des variables
 */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particuleTab = [];

let button = document.querySelector('button');
const subMenu = document.querySelector('.menu .links');
let imageMenu = document.querySelectorAll('.link img');

let isDisplayMenu = false;

let contactSection = document.querySelector('.contact-section');
let section = document.getElementById('section')
let links = document.querySelectorAll('.menu .link');
let iframe = document.createElement('iframe');
iframe.style.display = "none";
section.appendChild(iframe);
let index = 0;

/**
 * Gestion du iframe et des buttons de la barre de menu
 */

links.forEach(link => { 
    link.children[1].addEventListener('click', (e) => {
        iframe.src = e.target.id;
        iframe.style.display = "block";
        iframe.style = "animation: iframe 0.5s linear;";
        contactSection.style.display = 'none';
        if (e.target.parentElement.classList.contains('active')) {
           return ;
        }else{
            e.target.parentElement.classList.add('active');
        }
        index = e.target.getAttribute('data-anim');
        
        for (let i = 0; i < links.length; i++) {
            if (links[i].children[1].getAttribute('data-anim') != index) {
                links[i].classList.remove('active');
            } else {
                
            }       
        } 
        
        
    });
    if (window.innerWidth < 1200) {
        subMenu.style.display = "none";
    }
        
})

/**
 * Gestion du menu burger
 */
button.addEventListener('click', (e) => {
    elm = e.target.classList;
    console.log(elm);
    if(isDisplayMenu == false){
        subMenu.classList.add('sublink');
        subMenu.style.display = 'block';
        imageMenu.forEach(img => {
            img.style.display = 'none';
        });
        elm.replace('fa-bars','fa-close');
        isDisplayMenu = true;  
    }else{
        elm.replace('fa-close','fa-bars');
        subMenu.style.display = 'none';
        imageMenu.forEach(img => {
            img.style.display = 'block';
        });
        isDisplayMenu = false;
    }
})


/**
 * gestion de l'arriere plan
 * Creation de la classe Particule qui sera intancié à un tableau d'objet particules
 */

class Particule{
    constructor(x,y,directionX,directionY,taille,couleur){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.taille = taille;
        this.couleur = couleur;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.taille,0, Math.PI*2,false);
        ctx.fillStyle = this.couleur;
        ctx.fill();
    }
    MAJ(){
        if (this.x + this.taille > canvas.width || this.x - this.taille < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y + this.taille > canvas.height || this.y - this.taille < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

/**
 * Partie dediée aux fonctions
 */

function init() {
    particuleTab = [];
    for(let i= 0; i < 1500; i++){
        let taille = (Math.random() + 0.01);
        let x = Math.random() *(window.innerWidth - taille * 2);
        let y = Math.random() * (window.innerHeight - taille *2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        // intervalle -0.2 / 0.2 
        let couleur = "#cccccc";
        particuleTab.push(new Particule(x,y,directionX,directionY,taille,couleur));
    }
}


function animation() {
    requestAnimationFrame(animation);  // Execute une fonction 60 FPS 60 fois par second / la  fonction s'appelle elle même
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    for (let i = 0; i < particuleTab.length; i++) {
        particuleTab[i].MAJ();
        
    }

}

function resize() {
    init();
    animation();
}

/**
 * appel des fonctions
 */
let doit;
window.addEventListener('resize', () => {
    clearTimeout(doit);
    doit = setTimeout(resize, 100);
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
})
init();
animation();