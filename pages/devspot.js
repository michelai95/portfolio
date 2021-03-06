import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'

export default function project1() {
    useEffect(() => {
        document.body.style.backgroundColor = '#546b79'
        // #4a5f6b
    }
    )
    return (
        <div className={styles.wrap1}>
            <div className={styles.description}>
                <p className={styles.objective}>Objective</p>
                <p>A group project designed by 3 UX/UI designers and brought to life by 3 Devs. We had 24 hours to build a proof of concept based on a specific theme. <br />
                        This project was created with HTML, CSS, and ReactJs.
                </p>
                <a className={styles.link} href="https://github.com/jamo1998/Dev-Spot" target="_blank">Github</a> /
                    <a className={styles.link} href="https://happy-hypatia-639c22.netlify.app/login" target="_blank"> Deployed Version</a>
            </div>
        </div>
    )
}