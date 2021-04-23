import React from 'react'

import { Helmet } from 'react-helmet'

// Components
import Game from '../components/pages/Games'

// CSS
import '../css/pages/Games.css'

// Images
import eirikVsAdrian from '../media/img/games/eirik-vs-adrian.png';

export default function Games() {
    return <>
        <Helmet>
            <title>My Games</title>
        </Helmet>

        <div className="text-align-center">
            <h2>My Games</h2>

            <h3>
                Here are all the web games that
                I have uploaded to this domain:
            </h3>
        </div>

        <center><div className="game-grid">
            <Game name="Eirik Vs Adrian" category="Arcade" img={eirikVsAdrian} href="/games/play/eirik-vs-adrian" />
            <Game name="Eirik Vs Adrian" category="Arcade" img={eirikVsAdrian} href="/games/play/eirik-vs-adrian" />
            <Game name="Eirik Vs Adrian" category="Arcade" img={eirikVsAdrian} href="/games/play/eirik-vs-adrian" />
        </div></center>
    </>
}
