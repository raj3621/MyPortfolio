import React from 'react'
import Hero from '../Components/Hero/Hero'
import Languages from '../Components/Languages/Languages'
import Thumbnail from '../Components/Thumbnail/Thumbnail'
import Projects from '../Components/Projects/Projects'
import Slider from '../Components/Slider/Slider'
import Experience from '../Components/Experience/Experience'
import Socials from '../Components/Socials/Socials'

const Home = () => {
    return (<>
        <Hero />
        <Languages />
        <Thumbnail />
        <Projects />
        <Slider />
        <Experience />
        <Socials />
    </>
    )
}

export default Home