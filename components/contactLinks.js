import styles from '../styles/Home.module.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';

export default function Icons() {
    return (
        <div className={styles.icons}>
            <div>
                <FaGithub size={50} color={'white'} />
            </div>
            <div>
                <FaLinkedin size={50} color={'white'} />
            </div>
        </div>
    )
}