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
        document.body.style.backgroundColor = '#8ea9cc'
    }
    )
    return (
        <div className={styles.wrapper}>
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
            <div className={styles.work}>
                <WorkExperience />
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

