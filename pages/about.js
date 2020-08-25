import Navbar from '../components/navbar'
import React, { useEffect } from 'react'
import BrandStatement from '../components/brandStatement'
import WorkExperience from '../components/workExperience'
import Footer from '../components/footer'
import Arrow from '../components/arrow'
import Skills from '../components/skills'
import Image from '../components/image'
import Portfolio from '../components/portfolio'
import styles from '../styles/Home.module.css'


export default function About() {

    useEffect(() => {
        document.body.style.backgroundColor = '#546b79'
        // #4a5f6b
        
    }
    )
    return (
        <div className={styles.wrapper}>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap" rel="stylesheet" />
            <Navbar />
            <div className={styles.image}>
                <Image />
            </div>
            <div className={styles.brandStatement}>
                <BrandStatement />
            </div>
            <div className={styles.portfolio}>
                <Portfolio />
            </div>
            <div className={styles.workExperience}>
                <WorkExperience />
            </div>
            <div className={styles.mainSkills}>
                <Skills />
            </div>
            <div className={styles.footer}>
                <Footer />
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

