import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Navbar() {

    useEffect(() => {
        document.getElementById('hello').style.color = 'white';
    }, [])
    return (
        <div>
            <Head>
                <title>Michela's Portfolio</title>
            </Head>
            <navbar>
                <ul id='hello'>
                    <li>Home</li>
                    <li>
                        <Link href="">
                            <a>Portfolio</a>
                        </Link>
                    </li>
                    <li>Work Experience</li>
                    <li>Skills and Education</li>
                    <li>About</li>
                    <li>
                        <Link href="">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </navbar>
            <style jsx>
                {`
                #hello {
                    font-weight: 200;
                    color: white;
                    display: flex;
                    justify-content: space-around;
                    list-style: none;
                }`}
            </style>
        </div>
    )
} 