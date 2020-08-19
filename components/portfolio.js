import styles from '../styles/Home.module.css'
import PortfolioTitle from './title3'
import P1 from './P1'

export default function Portfolio() {
    return (
        <div>
            <PortfolioTitle />
            <P1 />
                <div className={styles.projectSummary}>
                    <p>Meme-Memory</p>
                    <p>A memory card game with famous memes</p>
                    <p>HTML, CSS, JS</p>
                </div>
        </div>
    )
}