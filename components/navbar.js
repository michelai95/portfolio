import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Navbar() {

    useEffect(() => {
        document.getElementById('hello').style.color = 'green';
    }, [])
    return (
        <div>
            <Head>
                <title>Michela's Portfolio</title>
            </Head>
            <navbar>
                <ul id='hello'>
                    <li>Home</li>
                    <li>About</li>
                    <li>
                        <Link href="">
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </navbar>
        </div>
    )
} 