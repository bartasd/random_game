let g_width = window.innerWidth-50;
let g_height = window.innerHeight-50;
let box_x = 0;
let box_y = 0;
let round = 1;


const updateViewport = () => {
    g_width = window.innerWidth-50;
    g_height = window.innerHeight-50-70;
}
const randomColor = () => b = '#' + Math.random().toString(16).slice(2,8);

const rand_x_y = () => {
    updateViewport();
    box_x = Math.floor(Math.random() * g_width);
    box_y = Math.floor(Math.random() * g_height);
}

function moveElement() {
    rand_x_y();
    box.style.top = `${box_y}px`;
    box.style.left = `${box_x}px`;
    box.style.backgroundColor = randomColor();
    setTimeout(moveElement, 1000);
}

const box = document.getElementById('box');
const abottom = document.getElementById('abottom');
const login = document.getElementById('login');
const submit_name = document.getElementById('submit_name');
const timer = document.getElementById('time');

let name = null;
function theRoundEnd(){
    
}

function start_timer(start) {
    if(start === 0)
        theRoundEnd();
    timer.innerHTML = start--;
    setTimeout(start_timer(start), 1000);
}

const start = () => {
    const roundLength = 30;
    start_timer(roundLength);
    //start_round();

}

function getName() {
    abottom.classList.remove("inputON");
    box.classList.remove('box_noDisplay');
    name = document.querySelector('input').value;
    exitInit();
    start();
}

function init(){
    abottom.classList.add("inputON");
}
function exitInit(){
    login.style.display = "none";
    document.querySelector(".user > h1").innerHTML = name;
    moveElement();
}

submit_name.addEventListener('click', getName);

init();
