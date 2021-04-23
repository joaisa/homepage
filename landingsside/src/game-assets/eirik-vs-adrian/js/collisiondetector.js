export default class CollisionDetector {
    constructor(game) {
        this.game = game;
        this.pixelOffset = 12;
    }

    detectCollision(gameObject1, gameObject2) {
        if (gameObject1.position.x + gameObject1.width - this.pixelOffset >= gameObject2.position.x
            && gameObject1.position.x + this.pixelOffset <= gameObject2.position.x + gameObject2.width
            && gameObject1.position.y + gameObject1.height - this.pixelOffset >= gameObject2.position.y
            && gameObject1.position.y + this.pixelOffset <= gameObject2.position.y + gameObject2.height)
            return(true);
    }
}