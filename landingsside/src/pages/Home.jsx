import React from 'react'

import { Helmet } from 'react-helmet';

export default function home() {
    return <>
        <Helmet>
            <title>Home</title>
        </Helmet>

        <div className="text-align-center paragraph">
            <h2>Welcome to my domain!</h2>

            <h3>
                Here you will find everything about me, such as
                some of my personal information, my projects
                and my games.
            </h3>

            <h2>YouTube Feed:</h2>
        </div>

        <center><iframe className="embed" title="Social Feed" src="https://widget.taggbox.com/first-widget-68000" width="60%" height="500vh" frameBorder="0" allowFullScreen></iframe></center>
    </>
}