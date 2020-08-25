import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet" />
            <p className={styles.contact}>Michela Iacobucci | <span className={styles.jobTitle}> Full Stack Web Developer </span> </p>
            <p className={styles.email}>I'd love to hear from you:  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=miacobucci17@gmail.com" target="_blank" className={styles.links}>miacobucci17@gmail.com</a></p>
        </div>
    )
}