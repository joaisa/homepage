import React from 'react'

import { ShortenName } from '../../lib/CustomFunctions'

export default function Game(properties) {
    return <a className="game" href={properties.href} title={properties.name}>
        <img src={properties.img} alt="Game Thumbnail" />
        <h3 className="game-title">{ShortenName(properties.name, 16)}</h3>
        <h3 className="game-category">{properties.category}</h3>
    </a>
}
