export default class InputHandler {
    constructor(game) {
        this.game = game;

        this.debounces = {
            space: false,
            r: false
        }

        this.keystates = {
            left: false,
            right: false,
            up: false,
            down: false,
            space: false,
            r: false
        }
    }

    determineMovement() {
        if (this.keystates.left && !this.keystates.right) {
            if (!this.keystates.up && !this.keystates.down) {this.game.plr.move('left'); return;}
            if (this.keystates.up && !this.keystates.down) {this.game.plr.move('upLeft'); return;}
            if (!this.keystates.up && this.keystates.down) {this.game.plr.move('downLeft'); return;}
        }

        if (!this.keystates.left && this.keystates.right) {
            if (!this.keystates.up && !this.keystates.down) {this.game.plr.move('right'); return;}
            if (this.keystates.up && !this.keystates.down) {this.game.plr.move('upRight'); return;}
            if (!this.keystates.up && this.keystates.down) {this.game.plr.move('downRight'); return;}
        }

        if (this.keystates.up && !this.keystates.down) {this.game.plr.move('up'); return;}

        if (!this.keystates.up && this.keystates.down) {this.game.plr.move('down'); return;}

        this.game.plr.move('stop');
    }

    keypress(input) {
        var keystate = (input.type === 'keydown')?true:false;

        if (input.key === 'a' || input.key === 'A' || input.key === 'ArrowLeft') {this.keystates.left = keystate; this.determineMovement(); return;}

        if (input.key === 'd' || input.key === 'D' || input.key === 'ArrowRight') {this.keystates.right = keystate; this.determineMovement(); return;}

        if (input.key === 'w' || input.key === 'W' || input.key === 'ArrowUp') {this.keystates.up = keystate; this.determineMovement(); return;}

        if (input.key === 's' || input.key === 'S' || input.key === 'ArrowDown') {this.keystates.down = keystate; this.determineMovement(); return;}

        if (input.key === ' ' && this.debounces.space === false) {this.keystates.space = keystate; this.debounces.space = true; this.game.togglePause();}
        this.debounces.space = keystate;

        if (input.key === 'r' && this.debounces.r === false) {this.keystates.r = keystate; this.debounces.r = true; this.game.restart();}
        this.debounces.r = keystate;
    }
}