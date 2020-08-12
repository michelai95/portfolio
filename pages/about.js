import Navbar from '../components/navbar'
import Name from '../components/name'
import React, { useEffect } from 'react'
import BrandStatement from '../components/brandStatement'
import WorkExperience from '../components/workExperience'
import Footer from '../components/footer'
import Arrow from '../components/arrow'
import Skills from '../components/skills'
import Image from '../components/image'
import Portfolio from '../components/portfolio'
import Icons from '../components/contactLinks'


export default function About() {

    useEffect(() => {
        document.body.style.backgroundColor = '#8ea9cc'
    }
    )
    return (
        <div className="container">
            <Navbar />
            <div className="center">
                <Name />
                <BrandStatement />
            </div>
            <div>
                <Image />
            </div>
            <div>
                <Portfolio />
            </div>
            <div>
                <WorkExperience />
                <Skills />
                <Footer />
            </div>
            <div>
                <Icons />
            </div>
            <div>
                <Arrow />
            </div>
            <style jsx>
                {`
                .center {
                    margin-top: 600px;
                }`}
            </style>
        </div>
    )
}

