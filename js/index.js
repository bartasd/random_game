let g_width = window.innerWidth-50;
let g_height = window.innerHeight-50;
let box_x = 0;
let box_y = 0;

const updateViewport = () => {
    g_width = window.innerWidth-50;
    g_height = window.innerHeight-50;
}
const randomColor = () => b = '#' + Math.random().toString(16).slice(2,8);

const rand_x_y = () => {
    updateViewport();
    box_x = Math.floor(Math.random() * g_width);
    box_y = Math.floor(Math.random() * g_height);
}

const debug = () => {
    console.log("viewport_x: ", window.innerWidth, " box_x", box_x );
    console.log("viewport_y: ", window.innerHeight, " box_y", box_y );
    if(box_x > g_width || box_y > g_height)
        console.log("problemele");
}

function moveElement() {
    rand_x_y();
    box.style.top = `${box_x}px`;
    box.style.left = `${box_y}px`;
    box.style.backgroundColor = randomColor();
    debug();
    setTimeout(moveElement, 1000);
}

const box = document.getElementById('box');
box.addEventListener("DOMContentLoaded", moveElement())
console.log(box);