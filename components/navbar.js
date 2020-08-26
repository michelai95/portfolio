import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import { FaFile } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

export default function Navbar() {

    return (
        <div>
            <Head>
                <title>Michela's Portfolio</title>
            </Head>
            <navbar>
                <ul className={styles.navbar}>
            <div>
                <a href="https://twitter.com/miacobucci8">
                    <FaTwitter size={50} color={'white'} />
                </a>
            </div>
            <div>
            <a href="https://github.com/michelai95">
                <FaGithub size={50} color={'white'}  />
            </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/michela-iacobucci-356b58132/" >
                <FaLinkedin size={50} color={'white'}  />
            </a>
            </div>
            <div>
                <a href="static/Resume 20.pdf">
                    <FaFile size={50} color={'white'} />
                </a>
            </div>
                </ul>
            </navbar>
        </div>
    )
} 