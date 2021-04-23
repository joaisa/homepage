import React from 'react'

// JS
import '../../game-assets/eirik-vs-adrian/js/index.js'

// Assets
import Player from '../../game-assets/eirik-vs-adrian/img/player.png'
import Enemy from '../../game-assets/eirik-vs-adrian/img/enemy.png'

import PlayerHurt from '../../game-assets/eirik-vs-adrian/sounds/player_hurt.mp3'
import PlayerSwoosh from '../../game-assets/eirik-vs-adrian/sounds/player_swoosh.mp3'
import EnemySpawn from '../../game-assets/eirik-vs-adrian/sounds/enemy_spawn.mp3'
import Music from '../../game-assets/eirik-vs-adrian/sounds/music.wav'



export default function EirikVsAdrian() {
    return <>
        <div id="game-assets">
            <img id="game-assets/img/player" src={Player} alt="Player" />
            <img id="game-assets/img/enemy" src={Enemy} alt="Enemy" />

            <audio id="game-assets/mp3/player-hurt" src={PlayerHurt} />
            <audio id="game-assets/mp3/player-swoosh" src={PlayerSwoosh} />
            <audio id="game-assets/mp3/enemy-spawn" src={EnemySpawn} />

            <audio id="game-assets/wav/music" src={Music} />
        </div>
    </>
}
