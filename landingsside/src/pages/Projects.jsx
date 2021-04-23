import React from 'react'

import { Helmet } from 'react-helmet'

import Project from '../components/pages/Projects'

// Media
import kh from '../media/img/projects/kh.jpg'
import podcastMedievaner from '../media/img/projects/podcast-medievaner.jpg'
import digitalKampanje from '../media/img/projects/digital-kampanje.jpg'

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

        <center><div class="project-grid">
            <Project name="Knutstad & Holen" category="Web" href="/projects/something" img={kh} />
            <Project name="Podkast om medievaner" category="Lyd & Film" href="/projects/something" img={podcastMedievaner} />
            <Project name="Digital kampanje" category="Web" href="/projects/something" img={digitalKampanje} />
        </div></center>
    </>
}
