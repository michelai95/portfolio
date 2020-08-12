import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Navbar() {

    return (
        <div>
            <Head>
                <title>Michela's Portfolio</title>
            </Head>
            <navbar>
                <ul className={styles.navbar}>
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
        </div>
    )
} 