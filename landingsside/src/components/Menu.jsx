import React from 'react'

import '../css/Menu.css'

function closeMenu() {
    let menu = document.getElementsByClassName('menu')[0];
    if(!menu) return;

    menu.setAttribute('class', 'menu menu-closed');
}

function redirectFromMenu(link) {
    closeMenu();
    setTimeout(() => {
        window.location = link;
    }, 500)
}

export default function Menu() {
    return <div className="menu menu-closed">
        <div className="top">
            <h2 className="title no-select">Menu</h2>
            <div className="close-button no-select" onClick={closeMenu}>×</div>
        </div>

        <div className="menu-buttons no-select">
            <div onClick={() => redirectFromMenu('/home')}>Home</div>
            <div onClick={() => redirectFromMenu('/about')}>About Me</div>
            <div onClick={() => redirectFromMenu('/projects')}>My Projects</div>
            <div onClick={() => redirectFromMenu('/games')}>My Games</div>
            <div onClick={() => redirectFromMenu('https://youtube.com/ignwombat')}>Test (YouTube)</div>
        </div>
    </div>
}
