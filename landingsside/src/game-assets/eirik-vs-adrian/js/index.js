import Game from './game.js';

var canvas, ctx, game, lastTime;

function gameLoop(timeStamp) {
    if(!canvas) return;

    var deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.update(deltaTime);
    game.draw(ctx);

    setTimeout(() => requestAnimationFrame(gameLoop), 5)
}

document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('game-window');
    if(!canvas) return;

    let footer = document.querySelector('.footer')
    if(footer) footer.remove();

    canvas.width = window.screen.availWidth / 1.4;
    canvas.height = window.screen.availHeight / 1.4;

    ctx = canvas.getContext('2d');
    
    const GAME_WIDTH = canvas.width;
    const GAME_HEIGHT = canvas.height;
    
    game = new Game(GAME_WIDTH, GAME_HEIGHT);
    
    
    lastTime = 0;
    
    game.start();
    requestAnimationFrame(gameLoop);
})