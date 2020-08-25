import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet" />
            <p className={styles.contact}>Michela Iacobucci | <span className={styles.jobTitle}> Full Stack Web Developer </span> </p>
            <p className={styles.email}>I'd love to hear from you: miacobucci@gmail.com</p>
        </div>
    )
}