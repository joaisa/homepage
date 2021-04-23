import React from 'react'

import { ShortenName } from '../../lib/CustomFunctions'

// CSS
import '../../css/pages/Projects.css'

export default function Project(properties) {
    return <a className="project" href={properties.href} title={properties.name}>
            <img src={properties.img} alt="Project Thumbnail" />
            <h3 className="project-title">{ShortenName(properties.name, 24)}</h3>
            <h3 className="project-category">{properties.category}</h3>
    </a>
}
