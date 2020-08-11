import SkillsTitle from '../components/title2'
import styles from '../styles/Home.module.css'

export default function Skills() {
    return (
        <div>
            <SkillsTitle />
            <div>
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
            <div>

            </div>
        </div>
    )
}