import React from 'react'
import AboutHerosection from '../components/about/AboutHerosection'
import Howwearesection from '../components/about/Howwearesection'
import OurVision from '../components/about/OurVision'
import OurValues from '../components/about/OurValues'
import OurMission from '../components/about/OurMission'
import Imagessection from '../components/about/imagessection'


const Aboutpage = () => {
    return (
        <div>
            <AboutHerosection />
            <Howwearesection />
            <OurVision />
            <OurValues />
            <OurMission />
            <Imagessection />
        </div>
    )
}

export default Aboutpage