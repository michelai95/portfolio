import Navbar from '../components/navbar'
import Name from '../components/name'
import React, { useEffect } from 'react'


export default function About() {

    useEffect(() => {
        document.body.style.backgroundColor = '#8591ac'
        return (
            <div>
                <Navbar />
                <div>
                    <Name />
                    <h2>I’m a full stack developer who’s passionate about helping clients bring their visions to life. <br />
                My interest in development started when I was younger but didn’t reignite until recently when I helped software engineers find new careers. <br />
                My passion stems from being able to help people connect on a global level by providing tools that make day to day tasks more efficient.<br />
                I’m excellent at meeting deadlines, love collaborating with a team, as well as building projects.</h2>
                </div>
            </div>
        )
    }
    )
}
