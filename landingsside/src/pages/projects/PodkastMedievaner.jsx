import React from 'react'

import { Helmet } from 'react-helmet'

export default function PodkastMedievaner() {
    return <>
        <Helmet>
            <title>Podkast Medievaner</title>
        </Helmet>

        <div className="text-align-center paragraph background-2 rounded-corner-3 margin-bottom">
            <h1>Podkast Medievaner</h1>

            <h4>
                I denne podkasten snakker vi om alle
                medievaner som omdannes rundt sosiale media.
            </h4>
        </div>

        <center><iframe className="embed" title="Podkast om medievaner" width="40%" height="420" src="https://www.youtube.com/embed/K9yvWSG-iEs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
    </>
}
