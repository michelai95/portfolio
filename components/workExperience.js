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
                            <li>Work with candidates and clients within the IT field to help build strong IT teams.</li>
                            <li>Within the first 8 months, booked over 80K in revenue. </li>
                            <li>Managed a candidate base of over 400+ people, while maintaining 10-12 interviews a week.</li>
                            <li>Scheduled and executed 2-3 visits to clients each week where I would create partnerships and negotiate terms.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>MINDBODY</h1>
                    <h3>Small/Medium Beauty && <br />
                        Wellness Software Specialist</h3>
                    <div>
                        <h5 className={styles.details}>Scottsdale, AZ</h5>
                        <h5 className={styles.details}>March 2019-September 2019</h5>
                    </div>
                    <div>
                        <ul className={styles.description}>
                            <li>Educate and integrate business management software into the wellness industry by cold calling and marketing to small business owner’s.</li>
                            <li>Full sales cycle implementation – self-sourcing leads to closing deals</li>
                            <li>Speak to two different software’s with differing functionality</li>
                            <li>Collaborate with SDRs to build an outbound funnel, while also selling to inbound leads</li>
                            <li>Averaged 110% of quota</li>
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
                            <li>Communicate national partnership information with franchisees and sell corporate approved advertising programs on Yelp</li>
                            <li>Proactively monitor, track, and adjust campaigns accordingly based on performance and expectations</li>
                            <li>Consistently exceed monthly sales goals</li>
                            <li>Piloted a franchise initiative to reach out to brands with no corporate partnership with Yelp and create a MSA</li>
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
                            <li>Educated, strategized, and successfully sold Yelp advertising programs through a high volume of outbound sales calls</li>
                            <li>Owned and managed a pipeline of clients all which are local businesses- all organized in CRM (Salesforce)</li>
                            <li>Assisted in helping small business owners determine their needs and aspirations as well as customized every sale from prospecting to close</li>
                            <li>Consistently exceeded monthly sales goals-more than 200k in total booked revenue</li>
                            <li>Effectively prioritized tasks and managed time within a fast-paced environment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}