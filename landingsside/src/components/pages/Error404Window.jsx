import React from 'react'

import '../../js/Error404Window.js'
import '../../css/DisableFooter.css'

// Images
import CharIdle from '../../media/img/pages/error-404/char_idle.png'
import CharJump from '../../media/img/pages/error-404/char_jump.png'

import CharLeft1 from '../../media/img/pages/error-404/char_left_1.png'
import CharLeft2 from '../../media/img/pages/error-404/char_left_2.png'

import CharRight1 from '../../media/img/pages/error-404/char_right_1.png'
import CharRight2 from '../../media/img/pages/error-404/char_right_2.png'

export default function Error404Window() {
    return <>
        <center><canvas id="error-404-window" className="background-2 rounded-corner-2" /></center>

        <div className="display-none">
            <img alt="" id="char_idle" src={CharIdle} />
            <img alt="" id="char_jump" src={CharJump} />

            <img alt="" id="char_left_1" src={CharLeft1} />
            <img alt="" id="char_left_2" src={CharLeft2} />

            <img alt="" id="char_right_1" src={CharRight1} />
            <img alt="" id="char_right_2" src={CharRight2} />
        </div>
    </>
}
