/**
 * @type {HTMLCanvasElement}
 */
// Var for the objects in the HTML------------------------------------------------------------------
const canvas = document.querySelector('.game__canvas');
const game = canvas.getContext('2d');
let elementSize;
let canvasSize;

// images for the canvas----------------------------------------------------------------------------
const motion = new Image();
motion.src = "img/motion.jpg"
motion.style.width = '50px';
motion.style.height = '50px';

//Event listeners------------------------------------------------------------------------------------
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize)

//funtions-------------------------------------------------------------------------------------------

// Funtion to start the renderizing
function setCanvasSize() {
    //part of the code to define the size of the Box and each element

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }
    canvas.setAttribute("height", canvasSize * 0.8);
    canvas.setAttribute("width", canvasSize * 0.8);
    elementSize = (canvasSize / 13) - 1;
    game.font = elementSize + "px Verdana";
    game.textAlign = 'start';

    startGame();
 
}
// funtion to locate the emojis
function startGame() {
     //part of the code to add the elements in the canvas
    
    for (let i = 0; i <= 9; i++) {
        game.fillText(emojis['X'], elementSize * i, elementSize)
    }
    for (let i = 0; i <= 9; i++) {
        game.fillText(emojis['X'], 0, elementSize * (i + 1))
    }
}   
   
    