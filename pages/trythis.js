import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'

export default function project4() {
    useEffect(() => {
        document.body.style.backgroundColor = '#546b79'
        // #4a5f6b
    }
    )
    return (
        <div className={styles.wrap1}>
            <div className={styles.description}>
                <p className={styles.objective}>Objective</p>
                <p>An individual project that required us to learn a new language/framework and finish our MVP within six days. The app allows users to find substitude ingredients for others. It is ideal for those with allergies, preferences, or dietary restrictions. <br />
                        Created with Vuejs, HTML, CSS, Javascript, and the BonAPI.
                </p>
                <a className={styles.link} href="https://github.com/michelai95/Project4" target="_blank">Github</a>
            </div>
        </div>
    )
}