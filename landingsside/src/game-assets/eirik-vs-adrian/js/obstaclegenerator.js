var speed = 0.5;

var minSpeed = 0.05;

var width = 80;
var height = 80;

export default class ObstacleGenerator {
    constructor(game) {
        this.game = game;

        this.obstacles = [];

        this.sounds = [];
    }

    reset() {
        this.obstacles = [];
    }

    newObstacle() {
        var snd = new Audio('./assets/mp3/enemy-spawn.mp3');
        snd.volume = 0.1;
        snd.play();
        this.sounds.push(snd);
        var rng = Math.floor((Math.random() * 3) + 0.5);

        if (rng === 0) {
            this.obstacles.push({
                width: width,
                height: height,
                from: 'left',
                speed: {
                    x: Math.floor((Math.random() * speed) + 0.5 + minSpeed),
                    y: Math.floor((Math.random() * speed / 1.2) + 0.5) - speed / 2
                },
                position: {
                    x: -width,
                    y: Math.floor((Math.random() * this.game.gameHeight) + 0.5)
                }
            });
        }

        if (rng === 1) {
            this.obstacles.push({
                width: width,
                height: height,
                from: 'right',
                speed: {
                    x: -Math.floor((Math.random() * speed) + 0.5 + minSpeed),
                    y: Math.floor((Math.random() * speed / 1.2) + 0.5) - speed / 2
                },
                position: {
                    x: this.game.gameWidth,
                    y: Math.floor((Math.random() * this.game.gameHeight) + 0.5)
                }
            });
        }

        if (rng === 2) {
            this.obstacles.push({
                width: width,
                height: height,
                from: 'top',
                speed: {
                    x: Math.floor((Math.random() * speed / 1.2) + 0.5) - speed / 2,
                    y: Math.floor((Math.random() * speed) + 0.5 + minSpeed)
                },
                position: {
                    x: Math.floor((Math.random() * this.game.gameWidth) + 0.5),
                    y: -height
                }
            });
        }

        if (rng === 3) {
            this.obstacles.push({
                width: width,
                height: height,
                from: 'bottom',
                speed: {
                    x: -Math.floor((Math.random() * speed / 1.2) + 0.5) - speed / 2,
                    y: -Math.floor((Math.random() * speed) + 0.5 + minSpeed)
                },
                position: {
                    x: Math.floor((Math.random() * this.game.gameWidth) + 0.5),
                    y: this.game.gameHeight
                }
            });
        }
    }

    resetSounds() {
        this.sounds.forEach(sound => {
            sound.pause();
            sound.remove();
        })

        this.sounds = [];
    }

    update(deltaTime) {
        if (!deltaTime || this.obstacles.length === 0) return;

        this.sounds.forEach(sound => {
            if (sound.currentTime === sound.length) sound.remove();
        })

        this.obstacles.forEach(obstacle => {
            this.updateObstacle(deltaTime, obstacle);
        });
    }

    draw(ctx) {


        this.obstacles.forEach(obstacle => {
            this.drawObstacle(ctx, obstacle);
        });
    }

    updateObstacle(deltaTime, obstacle) {

        obstacle.position.x += obstacle.speed.x * deltaTime;
        obstacle.position.y += obstacle.speed.y * deltaTime;

        if (obstacle.from === 'left' && obstacle.position.x >= this.game.gameWidth) {
            this.obstacles.splice(this.obstacles.indexOf(obstacle), 1);
            return;
        }

        if (obstacle.from === 'right' && obstacle.position.x + obstacle.width <= 0) {
            this.obstacles.splice(this.obstacles.indexOf(obstacle), 1);
            return;
        }

        if (obstacle.from === 'top' && obstacle.position.y >= this.game.gameWidth) {
            this.obstacles.splice(this.obstacles.indexOf(obstacle), 1);
            return;
        }

        if (obstacle.from === 'bottom' && obstacle.position.y + obstacle.height <= 0) {
            this.obstacles.splice(this.obstacles.indexOf(obstacle), 1);
            return;
        }

        if (this.game.collisionDetector.detectCollision(obstacle, this.game.plr)) {
            this.game.plr.gameOverSound.play();
            this.game.gamestate = 'GAMEOVER';
        }

    }

    drawObstacle(ctx, obstacle) {
        if (obstacle.position.x + obstacle.width <= 0
            || obstacle.position.x >= this.game.gameWidth
            || obstacle.position.y + obstacle.height <= 0
            || obstacle.position.y >= this.game.gameHeight) return;

        ctx.drawImage(document.getElementById('game-assets/img/enemy'), obstacle.position.x, obstacle.position.y, obstacle.width, obstacle.height);

    }
}