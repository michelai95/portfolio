import React, { useState } from 'react'
import Tile from '../components/Tile'
import styles from '../styles/Home.module.css'


export default function Accordion(props) {
    const [tiles, settiles] = useState([
        {
            company: "Robert Half",
            title: "IT recruiter",
            timeline: "September 2019-May 2020",
            description: "Within the first 8 months, booked over 80K in revenue by recruiting top talent in the market and relating to their career goals. Managed a candidate base of over 400+ people, while maintaining 10-12 interviews and 2-3 client visits a week, which taught me the importance of software that properly functions.",
            open: false
        },
        {
            company: "Mindbody Software",
            title: "SMB Software Specialist",
            timeline: "February 2019-September 2019",
            description: "Educate and integrate two differing business management software tools into the wellness industry through cold calling and prospecting. By leveraging the importance of Minbody and Booker’s software and their features, it allowed me to continuously exceed my monthly quota.",
            open: false
        },
        {
            company: "Yelp",
            title: "Franchise Account Executive",
            timeline: "June 2018-Februaury 2019",
            description: "Communicate national partnership information with franchisees and sell corporate approved advertising programs on Yelp by showing their backend data that revealed the amount of traffic their Yelp pages were receiving. Exceeded monthly quota goals, even when piloting an initiative that had us reach out to brands with no corporate partnership.",
            open: false
        },
        {
            company: "Yelp",
            title: "Account Executive",
            timeline: "May 2017-June 2018",
            description: "Owned and managed a pipeline of local small to medium clients through Salesforce, booking more than 200K, which showed me the importance of a CRM and how to properly utilize it. ",
            open: false
        }
    ])

    const toggleTile = index => {
        settiles(tiles.map((tile, i) => {
            if (i === index) {
                tile.open = !tile.open
            } else {
                tile.open = false
            }
            return tile
        }))
    }
    return (
        <div className="tiles">
            {tiles.map((tile, i) => (
                <Tile tile={tile} index={i} toggleTile={toggleTile} />
            ))}
        </div>
    )
}
