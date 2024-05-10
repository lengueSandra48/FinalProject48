let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.key');
let plusMoins = document.getElementById('key-plusMoins');


for (const item of buttons) {
    item.addEventListener('click',(e) => {
        btnText = e.target.innerText;
        if (btnText == 'x') {
            btnText = '*';
        }
        if (btnText == '÷') {
            btnText = '/';
        }
        screen.value += btnText; 
        console.log(btnText);
    });
}
 
function back()
{
    screen.value = screen.value.substr(0,screen.value.length-1);
}