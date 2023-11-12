let g_width = window.innerWidth-50;
let g_height = window.innerHeight-50;
let box_x = 0;
let box_y = 0;
let userPoints = 0;
let userClicked = false;
let pcPoints = 0;

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
}

const box = document.getElementById('box');
const abottom = document.getElementById('abottom');
const login = document.getElementById('login');
const submit_name = document.getElementById('submit_name');
const timer = document.getElementById('time');
const round = document.getElementById('round');
const userPTS = document.getElementById('userPTS');
const pcPTS = document.getElementById('pcPTS');
const playground = document.getElementById('playground');

let name = null;

abottom.classList.add("inputON");

let begin = null;
let time = 0;
let timeElapsed = 0
let roundTime = 30;
let roundCount = 1;

function start() {
    userClicked = false;
    timeElapsed = Date.now() - begin;
    timer.innerHTML = roundTime;
    round.innerHTML = roundCount;
    userPTS.innerHTML = userPoints;
    pcPTS.innerHTML = pcPoints;

    if(timeElapsed/1000 > time)
    {
        if(roundCount === 10 && roundTime === 0)
            return;
        time++;
        roundTime--;
        moveElement();
    }
    if(roundTime === 0)
    {
        roundTime = 30;
        roundCount++;
    }
    window.requestAnimationFrame(start);
}

function init() {
    abottom.classList.remove("inputON");
    box.classList.remove('box_noDisplay');
    name = document.querySelector('input').value;
    login.style.display = "none";
    document.querySelector(".user > h1").innerHTML = name;
    begin = Date.now();
    start();
}

const userBONUS = () => {
    userPoints++;
    userClicked = true;
}
const pcBONUS = () => {
    pcPoints++;
    userClicked = true;
}

submit_name.addEventListener('click', init);
box.addEventListener('click', userBONUS);
playground.addEventListener('click', pcBONUS);