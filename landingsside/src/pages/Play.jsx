import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

// CSS
import '../css/pages/Game.css'

// Games
import EirikVsAdrian from '../components/games/EirikVsAdrian'

// Media
import fullscreenIcon from '../media/svg/fullscreen-icon.svg'

export default function Play() {
    return <>
        <center><div className="game-container">
            <canvas id="game-window" width="600" height="600" />
            <img id="fullscreen-button" src={fullscreenIcon} alt="Fullscreen" width="24" height="24" />
        </div></center>
        <Switch>
            <Route exact path="/games/play/eirik-vs-adrian" component={EirikVsAdrian} />

            <Redirect to="/error/404" />
        </Switch>
    </>
}
