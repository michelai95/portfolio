import styles from '../styles/Home.module.css'
import { BsArrowBarUp } from 'react-icons/bs'


export default function Arrow() {

    return (
        <div className={styles.arrow}>
            <BsArrowBarUp size={50}/>
        </div>
    )
}