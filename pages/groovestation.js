import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'

export default function project2() {
    useEffect(() => {
        document.body.style.backgroundColor = '#546b79'
        // #4a5f6b
    }
    )
    return (
        <div className={styles.wrap1}>
            <div className={styles.description}>
                <p>An individual project completed within a two week sprint. I incorporated Spotify's OAuth and used their API to practice RESTful API calls. <br />
                    Once logged into your Spotify profile you can add songs to your playlists, which will reflect in your Spotify account. This project was created with HTML, Javascript, CSS, Express, NodeJS.
                </p>
                <a className={styles.link} href="https://github.com/michelai95/Project2" target="_blank">Github</a>
            </div>
        </div>
    )
}