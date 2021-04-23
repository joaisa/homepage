import React from 'react'

import { Helmet } from 'react-helmet'

import Error404Window from '../../components/pages/Error404Window'

export default function Error404() {
    return <>
        <Helmet><title>Error 404</title></Helmet>

        <div className="text-align-center">
            <h1>Error 404</h1>

            <h4 className="paragraph background-2 rounded-corner-2">
                I'm sorry, but unless you have a time machine,
                this page is unavailable :(
            </h4>
        </div>

        <Error404Window />
    </>
}
