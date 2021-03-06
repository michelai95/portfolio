import P1 from './P1'
import PortfolioTitle from './title3'
import P4 from './P4'
import Hackathon from './hackathon'
import P2 from './P2'
import styles from '../styles/Home.module.css'

export default function Portfolio() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Lato&family=Montserrat:ital@1&display=swap" rel="stylesheet" />
            <PortfolioTitle className={styles.title} />
            <div className={styles.grabPortfolio}>
                <div className={styles.group1}>
                    <div className={styles.container3}>
                        <div className={styles.p1}>
                            <P1 />
                            <div className={styles.link}>
                                <p>DevSpot</p>
                            </div>
                            <div className={styles.hidden}>
                                <div>
                                    <p className={styles.text}>
                                        Click to learn more!
                                        {/* <br />
                                        A site that allows developers to post their projects and collaborate with other developers to build out their portfolio.
                                        <br />
                                        This project was created within a group of four, two front-end developers and two back-end developers. Created with MERN stack. */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container3}>
                        <div className={styles.hackathon}>
                            <Hackathon />
                            <div className={styles.link}>
                                <p>Wonderlist</p>
                            </div>
                            <div className={styles.hidden}>
                                <div>
                                    <p className={styles.text}>
                                    Click to learn more!
                                        {/* <br /> A group project designed by 3 UX/UI designers and brought to life by 3 Devs. We had 24 hours to build a proof of concept based on a specific theme.
                                        <br />
                                        This project was created with HTML, CSS, and ReactJs. */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.group2}>
                    <div className={styles.container3}>
                        <div className={styles.p2}>
                            <P2 />
                            <div className={styles.link}>
                                <p>Groove Station</p>
                            </div>
                            <div className={styles.hidden}>
                                <div>
                                    <p className={styles.text}>
                                    Click to learn more!
                                        {/* <br /> An individual project completed within a two week sprint. I incorporated Spotify's OAuth and used their API to practice RESTful API calls.
                                        <br />
                                        Once logged into your Spotify profile you can add songs to your playlists, which will reflect in your Spotify account. This project was created with HTML, Javascript, CSS, Express, NodeJS. */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container3}>
                        <div className={styles.p4}>
                            <P4 />
                            <div className={styles.link}>
                                <p>Try this instead...</p>
                            </div>
                        </div>
                        <div className={styles.hidden}>
                            <div>
                                <p className={styles.text}>
                                Click to learn more!
                                    {/* <br />
                                    An individual project that required us to learn a new language/framework and finish our MVP within six days. The app allows users to find substitude ingredients for others. It is ideal for those with allergies, preferences, or dietary restrictions.
                                    <br />
                                    Created with Vuejs, HTML, CSS, Javascript, and the BonAPI. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}