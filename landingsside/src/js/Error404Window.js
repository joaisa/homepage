var canvas, ctx, WIDTH, HEIGHT, floorPosition;

var deltaTime = 0
var lastTime = 0;

var char = {
    pos: {x: 0, y: 0},

    velocity: {
        x: 0,
        y: 0,
        max: {x: 3, y: 3}
    },

    speed: {
        left: -20,
        right: 20,
        up: 15
    },

    gravity: 5,
    size: {x: 50, y: 128, multiplier: 1.4},

    grounded: false
}

function getCharSide(side) {
    switch(side) {
        default:

        break

        case 'left': return char.pos.x;
        case 'right': return char.pos.x + char.size.x * char.size.multiplier;
        case 'top': return char.pos.y;
        case 'bottom': return char.pos.y + char.size.y * char.size.multiplier;
    }
}

var runningFrame = 1;
var increment = 0.1;
function runningAnimation(direction) {

    increment = ((char.velocity.x > 0)?char.velocity.x:-char.velocity.x) * deltaTime / 100;
    runningFrame += increment;
    if(Math.floor(runningFrame) > 2) runningFrame = 1;
    return `char_${direction}_${Math.floor(runningFrame)}`;
}

function getImageToRender() {
    if(char.velocity.y !== 0) return 'char_jump';

    else if(char.velocity.x > 0) return runningAnimation('right');

    else if(char.velocity.x < 0) return runningAnimation('left');

    else return 'char_idle';
}

function addVelocity(num) {
    char.velocity.x += num / 100;
}

function jump() {
    if(char.grounded) {
        char.velocity.y = -char.speed.up / 10;
        char.grounded = false;
    }
}

const x = 10
function update() {
    char.velocity.y += (char.gravity / 1000) * deltaTime;
    char.velocity.x *= .995;

    (Math.floor((Math.random() * x * 8) + 0.5) === 1)?jump():(() => {})();

    addVelocity((Math.random() * x) - x / 2);

    if(char.velocity.x > char.velocity.max.x) char.velocity.x = char.velocity.max.x;
    if(char.velocity.y > char.velocity.max.y) char.velocity.y = char.velocity.max.y;

    char.pos.x += char.velocity.x * deltaTime;
    char.pos.y += char.velocity.y * deltaTime;
    
    if(getCharSide('left') > WIDTH) char.pos.x = -char.size.x * char.size.multiplier;
    if(getCharSide('right') < 0) char.pos.x = WIDTH;

    if(getCharSide('bottom') > floorPosition) {
        char.velocity.y = 0;
        char.pos.y = floorPosition - char.size.y * char.size.multiplier;
        char.grounded = true;
    }
}

function render() {

    ctx.clearRect(0, 0, WIDTH, HEIGHT)

    // Floor
    ctx.fillStyle = '#151515';
    ctx.fillRect(0, floorPosition, WIDTH, HEIGHT);

    // Char
    ctx.drawImage(document.getElementById(getImageToRender()), char.pos.x, char.pos.y, char.size.x * char.size.multiplier, char.size.y * char.size.multiplier);
}



function loop(timeStamp) {

    deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    update()
    render()

    requestAnimationFrame(loop);
}

document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('error-404-window');
    if(!canvas) return;

    ctx = canvas.getContext('2d');

    canvas.width = window.screen.width / 1.8;
    canvas.height = window.screen.height / 1.8;

    WIDTH = canvas.width;
    HEIGHT = canvas.height;

    floorPosition = HEIGHT / 1.2

    char.pos.x = WIDTH / 2 - char.size.x * char.size.multiplier / 2;
    char.pos.y = -char.size.y * char.size.multiplier;

    requestAnimationFrame(loop)
})


