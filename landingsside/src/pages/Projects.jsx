import React from 'react'

import { Helmet } from 'react-helmet'

import Project from '../components/pages/Projects'

// Media
import KH from '../media/img/projects/kh.jpg'
import PodkastMedievaner from '../media/img/projects/podkast-medievaner.jpg'
import DigitalKampanje from '../media/img/projects/digital-kampanje.jpg'

export default function Projects() {
    return <>
        <Helmet>
            <title>My Projects</title>
        </Helmet>

        <div className="text-align-center">
            <h2>My Projects</h2>

            <h3>
                Here are all the projects that
                I have uploaded to this domain:
            </h3>
        </div>

        <center><div className="project-grid no-select">
            <Project name="Knutstad & Holen" category="Web" href="/projects/kh" img={KH} />
            <Project name="Podkast om medievaner" category="Lyd & Film" href="/projects/podkast-medievaner" img={PodkastMedievaner} />
            <Project name="Digital kampanje" category="Web" href="/projects/digital-kampanje" img={DigitalKampanje} />
        </div></center>
    </>
}
