import React from 'react'

import '../css/Menu.css'

import ToggleMenu from '../lib/CustomFunctions'

function redirectFromMenu(link) {
    ToggleMenu(false)
    setTimeout(() => {
        (link.substring(0, 4) === 'http')?window.open(link):(() => {window.location = link})()
    }, 450)
}

export default function Menu() {
    return <>
        <div className="menu menu-closed">
            <div className="top">
                <h2 className="title no-select">Menu</h2>
                <div className="close-button no-select" onClick={() => ToggleMenu(false)}>×</div>
            </div>

            <div className="menu-buttons no-select">
                <h3 className="menu-category">Pages</h3>

                <div onClick={() => redirectFromMenu('/home')}>Home</div>
                <div onClick={() => redirectFromMenu('/about')}>About Me</div>
                <div onClick={() => redirectFromMenu('/projects')}>My Projects</div>
                <div onClick={() => redirectFromMenu('/games')}>My Games</div>

                <h3 className="menu-category">Social Links</h3>

                <div onClick={() => redirectFromMenu('https://youtube.com/ignwombat')}>My YouTube Channel</div>
                <div onClick={() => redirectFromMenu('https://discord.gg/YdJ345mXmK')}>My Discord Server</div>
                <div onClick={() => redirectFromMenu('https://soundcloud.com/ignwombat')}>My SoundCloud Page</div>
                <div onClick={() => redirectFromMenu('https://ignwombat.newgrounds.com')}>My NewGrounds Page</div>

                <h3 className="menu-category">Other Pages</h3>

                <div onClick={() => redirectFromMenu('https://imkatta.no')}>Back to imkatta.no</div>
                <div onClick={() => redirectFromMenu('https://youtu.be/dQw4w9WgXcQ')}>????</div>
            </div>
        </div>

        <div className="menu-cover menu-cover-closed" />
    </>
}
