import React from 'react'

import '../css/Footer.css'

import youtubeLogo from '../media/svg/youtube-logo.svg'
import discordLogo from '../media/svg/discord-logo.svg'
import soundcloudLogo from '../media/svg/soundcloud-logo.svg'

export default function Footer() {
    return <div className="footer">
        <div className="footer-grid">
            <div className="contact-me">
                <li>Joakim Isaksen</li>
                <li>+47 93476312</li>
                <li><a href="mailto:ignwombat@gmail.com">ignwombat@gmail.com</a></li>
            </div>

            <div className="social-links">

                <li><a href="https://youtube.com/ignwombat">
                    <img src={youtubeLogo}
                    alt="YouTube"
                    height="70rem"
                    className="youtube" />
                </a></li>

                <li><a href="https://discord.gg/YdJ345mXmK">
                    <img src={discordLogo}
                    alt="Discord"
                    height="95rem"
                    className="discord" /></a></li>

                <li><a href="https://soundcloud.com/ignwombat">
                    <img src={soundcloudLogo}
                    alt="SoundCloud"
                    height="100rem"
                    className="soundcloud" /></a></li>

            </div>

            <div className="pages">
                <li><a href="/home">Home</a></li>
                <li><a href="/nonexistingpage">Non Existing Page</a></li>
            </div>
        </div>
    </div>
}
