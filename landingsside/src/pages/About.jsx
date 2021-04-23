import React from 'react'

import { Helmet } from 'react-helmet'

export default function About() {
    return <>
        <Helmet>
            <title>About Joakim</title>
        </Helmet>
        <div className="text-align-center">
            <h1>About Me</h1>

            <div className="paragraph background-2 rounded-corner-3">
                <h4>
                    <p>My name is Joakim Isaksen, and I live in an area named Ottestad.</p>

                    <p>
                        I was born the 17th of August, in 2004, and I'm currently a student
                        IT and Media production at Hamar Katedralskole in Hamar.
                    </p>

                    <p>
                        My interests mainly revolve around computers. I like both gaming, coding,
                        music production and video editing.
                    </p>

                    <p>
                        I also have a YouTube channel <a className="link" href="https://youtube.com/ignwombat">here</a>,
                        where I post various content, such as gaming, memes and my music.
                        Here's a video of a music project that I uploaded:
                    </p>
                </h4>
            </div>

            <center><iframe className="embed margin-top margin-bottom rounded-corner-2" width="60%" height="700vh" src="https://www.youtube.com/embed/ElKzExQDidg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen controls></iframe></center>

            <div className="paragraph background-2 rounded-corner-3">
                <h2>My skills</h2>

                <h4>
                    <p>Personally, I would put my skills in a list like this, starting with my best abilities:</p>

                    <div className="text-align-left center-80">
                        <h5>
                            <li>Coding things, such as websites, games, macros etc.</li>

                            <li>Gaming, mainly speedrunning hard games.</li>

                            <li>Making music, usually with a style similar to EDM.</li>

                            <li>General math. I can fairly quickly do equations in my head, and on paper.</li>
                        </h5>
                    </div>
                </h4>
            </div>
        </div>
    </>
}
