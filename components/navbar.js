import Head from 'next/head'
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
                <title>Michela Iacobucci</title>
            </Head>
            <div className={styles.brandName}> 
                <button className={styles.chineseName}><span>Mic.</span></button>
            </div>
            <navbar>
                <ul className={styles.navbar}>
            <div>
                <a href="https://twitter.com/miacobucci8" target="_blank">
                    <FaTwitter size={50} color={'white'} />
                </a>
            </div>
            <div>
            <a href="https://github.com/michelai95" target="_blank">
                <FaGithub size={50} color={'white'}  />
            </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/michela-iacobucci-356b58132/" target="_blank">
                <FaLinkedin size={50} color={'white'}  />
            </a>
            </div>
            <div>
                <a href="static/MichelaIacobucciResume.pdf" target="_blank">
                    <FaFile size={50} color={'white'} />
                </a>
            </div>
                </ul>
            </navbar>
        </div>
    )
} 