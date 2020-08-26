import Title from '../components/title1'
import styles from '../styles/Home.module.css'


export default function WorkExperience() {
    return (
        <div>
            <Title />
            <div className={styles.work}>
                <div>
                    <h1>Robert Half</h1>
                    <h3>IT Recruiting Manager</h3>
                    <div>
                        <h5 className={styles.details}>Phoenix, AZ</h5>
                        <h5 className={styles.details}>September 2019-April 2020</h5>
                    </div>
                    <div>
                        <ul className={styles.description}>
                            <li>Within the first 8 months, booked over 80K in revenue by recruiting top talent in the market and relating to their career goals.</li>
                            <li>Managed a candidate base of over 400+ people, while maintaining 10-12 interviews and 2-3 client visits a week, which taught me the importance of software that properly functions.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>MINDBODY</h1>
                    <h3>SMB <br />
                    Software Specialist</h3>
                    <div>
                        <h5 className={styles.details}>Scottsdale, AZ</h5>
                        <h5 className={styles.details}>March 2019-September 2019</h5>
                    </div>
                    <div>
                        <ul className={styles.description}>
                            <li>Educate and integrate two differing business management software tools into the wellness industry through cold calling and prospecting.</li>
                            <li>By leveraging the importance of Minbody and Booker’s software and their features, it allowed me to continuously exceed my monthly quota.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>Yelp</h1>
                    <h3>Franchise Account Executive</h3>
                    <div>
                        <h5 className={styles.details}>Scottsdale, AZ</h5>
                        <h5 className={styles.details}>June 2018-February 2019</h5>
                    </div>
                    <div>
                        <ul className={styles.description}>
                            <li>Communicate national partnership information with franchisees and sell corporate approved advertising programs on Yelp by showing their backend data that revealed the amount of traffic their Yelp pages were receiving.</li>
                            <li>Exceeded monthly quota goals, even when piloting an initiative that had us reach out to brands with no corporate partnership.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>Yelp</h1>
                    <h3>Account Executive</h3>
                    <div>
                        <h5 className={styles.details}>Scottsdale, AZ</h5>
                        <h5 className={styles.details}>June 2017-May 2018</h5>
                    </div>
                    <div>
                        <ul className={styles.description}>
                            <li>Owned and managed a pipeline of local small to medium clients through Salesforce, which showed me the importance of a CRM.</li>
                            <li>Consistently exceeded monthly sales goals-more than 200k in total booked revenue by helping business owners understand their potential share of voice with advertising.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}