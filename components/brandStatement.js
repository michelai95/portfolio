import styles from '../styles/Home.module.css'


export default function BrandStatement() {
        
    return (
        <div className={styles.bs}>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"> </script>
            
            <h1 className={styles.ml12} data-hover="你好,我叫艾麗娜. 我是全段工程師." data-active="Hello, my name is Michela.">Hello, my name is Michela</h1>
            <p className={styles.about} data-hover="我熱衷於幫助他人將其數字化願景變為現實。我對發展的興趣從小開始。我的熱情來自能夠通過提供使日常任務更有效率的工具來幫助人們在全球範圍內建立聯繫。" data-active="">I’m a full stack developer who’s passionate about helping others bring their digital visions to life.<br />
                My interest in development started when I was younger but didn’t reignite until post college.<br />
                During my time as an IT recruiter I enjoyed talking with developers about their personal projects and passion for technology, which sparked my interest. <br />
                My passion stems from being able to help people connect on a global level by providing tools that make day to day tasks more efficient.<br />
                I like to consider myself a futurist, which means that I am fascinated by AgroTech and the kind of innovation that will lead to a more sustainable world. <br />
                I’m excellent at meeting deadlines, love collaborating with others, and take pride in detailed data-driven code.<br />
                In my spare time, you can find me geeking out on non-fiction technology books, traveling, or listening to good music. <br />
            </p>
        </div>
    )
}