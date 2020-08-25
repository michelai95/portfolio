import styles from '../styles/Home.module.css'
import Props from '../static/name.js'

export default function BrandStatement() {
        
    return (
        <div className={styles.bs}>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"> </script>
            
            <h1 className={styles.ml12}>Hello, my name is Michela</h1>
            <p className={styles.about}>I’m a full stack developer who’s passionate about helping others bring their digital visions to life.<br />
                My interest in development started when I was younger but didn’t reignite until post college.<br />
                My passion stems from being able to help people connect on a global level by providing tools that make day to day tasks more efficient.<br />
                I’m excellent at meeting deadlines, love collaborating with a team, as well as building detailed projects. <br />
                In my spare time, you can find me geeking out on non-fiction technology books, traveling, or listening to good music.
            </p>
        </div>
    )
}