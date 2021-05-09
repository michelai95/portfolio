import SkillsTitle from '../components/title2'
import styles from '../styles/Home.module.css'
import { FaLaptopCode } from 'react-icons/fa'
import { FaServer } from 'react-icons/fa'

export default function Skills() {
    return (
        <div className={styles.extra}>
            <div>
                <SkillsTitle />
            </div>
            <div className={styles.container}>
            <div className={styles.container1}>
            <FaLaptopCode className={styles.skills} size={60} color={'white'} />
                <ul className={styles.list}>
                    <li>HTML5</li>
                    <li>CSS3 + SASS</li>
                    <li>ReactJS</li>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>Salidity</li>
                    <li>VueJS</li>
                    <li>jQuery</li>
                    <li>NextJS</li>
                    <li>Material UI</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className={styles.container2}>
                <FaServer size={60} color={'white'} className={styles.skills} />
                <ul className={styles.list}>
                    <li>Postgres</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>SQLAlchemy</li>
                    <li>Flask</li>
                    <li>Heroku CLI</li>
                    <li>Vercel</li>
                    <li>Netlify</li>
                    <li>Git && Github</li>
                    <li>CPanel</li>
                    <li>Ganache</li>
                    <li>Truffle</li>
                </ul>
            </div>

            </div>
        </div>

    )
}