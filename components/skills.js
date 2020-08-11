import SkillsTitle from '../components/title2'

export default function Skills() {
    return (
        <div>
            <SkillsTitle />
            <div>
                <p id="front">Client-side:</p>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3 + SASS</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>Materialize</li>
                    <li></li>
                </ul>
            </div>
            <div>
                <p id="back">Server-side:</p>
                <ul>
                    <li>Python</li>
                    <li>Postgres</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>SQLAlchemy</li>
                    <li>Flask</li>
                    <li>Heroku CLI</li>
                    <li>Velcer</li>
                    <li>Netlify</li>
                    <li>Git && Github</li>
                </ul>
            </div>
            <div>

            </div>
            <div>

            </div>
            <style jsx>
                {`
                li {
                    list-style: none;
                    text-align: center;
                },
                body {
                    color: white;
                    font-weight: 200;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-around;
                },
                p {
                    font-weight: 400;
                    text-align: center;
                }`}
            </style>
        </div>
    )
}