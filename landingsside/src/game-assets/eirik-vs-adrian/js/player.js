export default class Player {
    constructor(game) {
        this.game = game;

        this.width = 64;
        this.height = 64;

        this.position = {x:this.game.gameWidth / 2 - this.width / 2, y:this.game.gameHeight / 2 - this.height / 2};

        this.speed = {
            x: 115,
            y: 115
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        this.gameOverSound = document.getElementById('game-assets/mp3/player-hurt')
        this.swooshSound = document.getElementById('game-assets/mp3/player-swoosh')

        this.swooshDebounce = false;

        this.swooshInterval = 10;
    }

    reset() {
        this.position = {x:this.game.gameWidth / 2 - this.width / 2, y:this.game.gameHeight / 2 - this.height / 2};

        this.swooshDebounce = false;
    }

    move(direction) {
        if (direction === 'left') {
            this.velocity.x = -this.speed.x;
            this.velocity.y = 0;
            return;
        }

        if (direction === 'right') {
            this.velocity.x = this.speed.x;
            this.velocity.y = 0;
            return;
        }

        if (direction === 'up') {
            this.velocity.x = 0;
            this.velocity.y = -this.speed.y;
            return;
        }

        if (direction === 'down') {
            this.velocity.x = 0;
            this.velocity.y = this.speed.y;
            return;
        }

        if (direction === 'upLeft') {
            this.velocity.x = -this.speed.x;
            this.velocity.y = -this.speed.y;
            return;
        }

        if (direction === 'upRight') {
            this.velocity.x = this.speed.x;
            this.velocity.y = -this.speed.y;
            return;
        }

        if (direction === 'downLeft') {
            this.velocity.x = -this.speed.x;
            this.velocity.y = this.speed.y;
            return;
        }

        if (direction === 'downRight') {
            this.velocity.x = this.speed.x;
            this.velocity.y = this.speed.y;
            return;
        }

        if (direction === 'stop') {
            this.velocity = {x: 0, y: 0}
        }
    }



    update(deltaTime) {
        if (!deltaTime) return;

        if (this.swooshDebounce === false && Math.floor(this.game.score) !== 0 && Math.floor(this.game.score) / this.swooshInterval === Math.floor(this.game.score / this.swooshInterval)) {
            this.swooshDebounce = true;
            this.swooshSound.play();
        }
        if (Math.floor(this.game.score) / this.swooshInterval !== Math.floor(this.game.score / this.swooshInterval)) this.swooshDebounce = false;

        this.position.x += this.velocity.x / deltaTime;
        this.position.y += this.velocity.y / deltaTime;

        if (this.position.x < 0) this.position.x = 0;

        if (this.position.y < 0) this.position.y = 0;

        if (this.position.y + this.height > this.game.gameHeight) this.position.y = this.game.gameHeight - this.height;

        if (this.position.x + this.width > this.game.gameWidth) this.position.x = this.game.gameWidth - this.width;
    }

    draw(ctx) {
        ctx.drawImage(document.getElementById('game-assets/img/player'), this.position.x, this.position.y, this.width, this.height);
    }
}