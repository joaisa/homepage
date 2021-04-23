import React from 'react'

import '../css/Header.css';

function toggleMenu() {
    let menu = document.getElementsByClassName('menu')[0];
    if(!menu) return;

    if(menu.className === 'menu menu-closed')
        menu.setAttribute('class', 'menu menu-open');
    else
        menu.setAttribute('class', 'menu menu-closed');
}

export default function Header() {
    return <div className="header">
        <div className="menu-bars" onClick={toggleMenu}>
            <div className="menu-bar menu-bar-1"></div>
            <div className="menu-bar menu-bar-2"></div>
            <div className="menu-bar menu-bar-3"></div>
        </div>

        <h1 className="page-title no-select">Joakim Isaksen</h1>
    </div>
}
