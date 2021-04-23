import Player from './player.js';
import InputHandler from './inputhandler.js';
import ObstacleGenerator from './obstaclegenerator.js';
import CollisionDetector from './collisiondetector.js';

var music = null

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.collisionDetector = new CollisionDetector(this);

        this.plr = new Player(this);

        this.inputHandler = new InputHandler(this);

        this.obstacleGenerator = new ObstacleGenerator(this);

        this.gamestate = 'PAUSED';

        this.score = 0;
        this.sessionHighscore = 0;

        this.spawnChance = 20;
    }

    gameScreens(ctx) {

        if (this.gamestate === 'RUNNING') {
            ctx.fillStyle = '#fff';

            ctx.textAlign = 'center';

            ctx.font = '40px brother-1816, sans-serif';
            ctx.fillText(`Score: ${Math.floor(this.score)}`, this.gameWidth / 2, this.gameHeight / 1.1);
        }

        if (this.gamestate === 'PAUSED') {

            ctx.fillStyle = 'rgba(0, 0, 0, .5)';

            ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

            ctx.fillStyle = '#fff';

            ctx.textAlign = 'center';

            ctx.font = '40px brother-1816, sans-serif';
            ctx.fillText('PAUSED', this.gameWidth / 2, this.gameHeight / 2 + 20);
            ctx.fillText('Press SPACEBAR to continue', this.gameWidth / 2, this.gameHeight / 2 + 100);

            return;
        }

        if (this.gamestate === 'GAMEOVER') {

            this.obstacleGenerator.resetSounds();

            ctx.fillStyle = 'rgba(0, 0, 0, .5)';

            ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

            ctx.fillStyle = '#fff';

            ctx.textAlign = 'center';

            var highScoreText = '';

            ctx.font = '40px brother-1816, sans-serif';
            ctx.fillText('AU!', this.gameWidth / 2, this.gameHeight / 2 + -90);
            if (Math.floor(this.score) === 69) ctx.fillText(`Score: 69 (nice)`, this.gameWidth / 2, this.gameHeight / 2);
            else ctx.fillText(`Score: ${Math.floor(this.score)}`, this.gameWidth / 2, this.gameHeight / 2);

            if (Math.floor(this.score) > this.sessionHighscore) highScoreText = 'NEW HIGH SCORE';
            if (Math.floor(this.score) <= this.sessionHighscore) highScoreText = `High Score: ${this.sessionHighscore}`;

            if (Math.floor(this.score) === 0 && this.sessionHighscore === 0) highScoreText = '';

            ctx.fillText(highScoreText, this.gameWidth / 2, this.gameHeight / 2 + 50)

            ctx.fillText('Press R to restart', this.gameWidth / 2, this.gameHeight / 2 + 120);

            return;
        }

    }

    togglePause() {

        if(this.gamestate === 'PAUSED') {
            this.gamestate = 'RUNNING';
                
            this.obstacleGenerator.sounds.forEach(sound => {
                sound.play();
            })

            music.play();
        }

        else {
            this.gamestate = 'PAUSED';

            this.obstacleGenerator.sounds.forEach(sound => {
                sound.pause();
            })

            music.pause();
        }
    }

    start() {
        music = document.getElementById('game-assets/wav/music');
        
        this.gamestate = 'PAUSED';
        
        document.addEventListener('keydown', (input) => {
            this.inputHandler.keypress({type: input.type, key: input.key});
        });

        document.addEventListener('keyup', (input) => {
            this.inputHandler.keypress({type: input.type, key: input.key});
        });

        /*loopify('assets/wav/game_music_8bit.wav', function(err, loop) {
            if (err) return;
            music = loop;
        })*/
    }

    restart() {
        if (this.gamestate !== 'GAMEOVER') return;
        this.plr.reset();
        this.obstacleGenerator.reset();

        this.gamestate = 'RUNNING';

        if (Math.floor(this.score) > this.sessionHighscore) this.sessionHighscore = Math.floor(this.score);

        this.score = 0;

        music.play();
    }

    update(deltaTime) {
        if (this.gamestate === 'GAMEOVER') music.pause();
        if (!deltaTime || this.gamestate === 'PAUSED' || this.gamestate === 'GAMEOVER') return;

        this.score += 0.001 * deltaTime;

        this.plr.update(16);
        
        if (Math.floor((Math.random() * this.spawnChance) + 0.5) === 1) this.obstacleGenerator.newObstacle();

        this.obstacleGenerator.update(deltaTime);
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

        this.plr.draw(ctx);

        this.obstacleGenerator.draw(ctx);

        this.gameScreens(ctx);
    }
}