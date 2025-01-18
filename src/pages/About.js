import React from 'react'
import { IconAbout } from '../icons/icons'
import './css/About.css'

const About = () => {
    return (
        <div className='About'>
            <h1 className='title'>About Me <IconAbout /> </h1>
            {/* <div className='img_logo'>
                <img src="https://i.postimg.cc/mZHqhym8/Ecode-Website-Service.png" alt="wolz CODElife" />
            </div> */}
            <br />
            <code>
                <q>
                    I am <a href="mailto:tomiwa1.dev@gmail.com" title="Tomiwa Akinbode" className='highlighted'>Tomiwa Akinbode</a> a proficient technical product manager with {`${new Date().getFullYear() - 2017}+`} years of experience and a proven community manager with about {`${new Date().getFullYear() - 2021}+`} of working with top web3 communities such as BlockGames, Bubble, Payy, Hunt-Town, and more. I specialize in aiding cross-functional teams, efficiently managing time, and driving products toward business goals using tools and skills like Jira, Slack, Google Docs, and Agile Methodologies. My strong organizational skills allow me to handle multiple teams and deadlines in fast-paced, dynamic environments.
                    <br /><br />
                    With extensive experience in DeFi, blockchain, and cryptocurrency, I have successfully launched on-chain applications that have significantly boosted user engagement and trading volumes across various platforms. For instance, I led the redesign and launch of Otherside, a gamified, interoperable metaverse blending MMORPG mechanics with web3-enabled virtual worlds.
                    <br/><br/>
                    As a Product Manager, I have also successfully launched the MVP of Plink, a DeFi wallet abstraction platform that enables seamless transactions of web3 assets like USDC and USDT. I was also instrumental in the development of Ape Accelerator, a web platform for creating web3 launchpads and DAOs, which amassed over 11 million users and facilitated $2 billion in NFT trading volume.
                    <br/><br/>
                    I've worked as a contractor for various <a href="https://www.linkedin.com/in/theproductoracle/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className='highlighted'>companies</a> across the world, and I am constantly driven to learn new technologies and embrace innovative tools to continue delivering excellence and driving engagement in the web3 and DeFi spaces.
                    <br></br><br/>
                    I'd appreciate the opportunity of a chat at your earliest convenience so we can discuss how we can work together.
                </q>
            </code>
        </div>
    )
}

export default About
