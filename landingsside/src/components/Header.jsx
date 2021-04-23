import React from 'react'

import '../css/Header.css';

import ToggleMenu from '../lib/CustomFunctions'

export default function Header() {
    return <div className="header">
        <div className="menu-bars" onClick={ToggleMenu}>
            <div className="menu-bar menu-bar-1" />
            <div className="menu-bar menu-bar-2" />
            <div className="menu-bar menu-bar-3" />
        </div>

        <h1 className="page-title no-select">Joakim Isaksen</h1>
    </div>
}
