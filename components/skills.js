import SkillsTitle from '../components/title2'
import styles from '../styles/Home.module.css'
import ImageTwo from '../components/image2'

export default function Skills() {
    return (
        <div className={styles.wrapper}>
            <div>
                <ImageTwo />
                <SkillsTitle />
            </div>
            <div className={styles.container}>
                <p className={styles.skills}>Client-side:</p>
                <ul className={styles.list}>
                    <li>HTML5</li>
                    <li>CSS3 + SASS</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>Materialize</li>
                    <li></li>
                </ul>
            </div>
            <div>
                <ImageTwo />
            </div>
            <div className={styles.container}>
                <p className={styles.skills}>Server-side:</p>
                <ul className={styles.list}>
                    <li>Python</li>
                    <li>Postgres</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>SQLAlchemy</li>
                    <li>Flask</li>
                    <li>Heroku CLI</li>
                    <li>Velcer</li>
                    <li>Netlify</li>
                    <li>Git && Github</li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    )
}