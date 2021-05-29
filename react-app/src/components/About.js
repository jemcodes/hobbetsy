import React from 'react'
import "./styles/about.css"
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar';
import Footer from './Footer';
import lisaHeadshot from '../images/lisa-headshot.png';
import janeHeadshot from '../images/jane-headshot.png';
import patrickHeadshot from '../images/patrick-headshot.png';
import jamieHeadshot from '../images/jamie-headshot.png';



const About = () => {
    return (
        <div className="about-whole">
            <NavBar />
            <div className="about-main-container">
                <div className="about-biline-holder">
                    <div className="about-biline-container">
                        <h1>About Hobbetsy</h1>
                        <div className="about-blurb-container">
                            <p id="about-biline">Looking for a sword, armor or just some good old fashioned potatoes look no farther than Hobbetsy. We supply it all. A wise grey wizard once said if you cant find it on Hobbetsy you don't need it for questing. Soon we will be introducing Hobbetsy prime which promises two day shipping to all places in middle earth. Excluding Mordor, shipping to Mordor requires additional shipping costs and a fellowship.</p>
                        </div>
                    </div>
                </div>
                <div className="about-devs-container">
                    <div className="about-dev-card">
                        <div className="about-dev-photo-container">
                            <img className="about-dev-image" src={janeHeadshot}></img>
                        <div className="about-dev-info-container">
                            <div className="about-dev-name"> jane Martin</div>
                            <div className="about-dev-link-container">
                            <a className="about-dev-link" href="https://github.com/jemcodes">github</a>
                            <a className="about-dev-link" href="https://www.linkedin.com/in/jemcodes/">linkedin</a>
                            <div className="about-dev-project-links">
                                <p>Other Apps by the developer:</p>
                                <a className="about-dev-link" href="https://travelscape-app.herokuapp.com/">travelscape</a>
                                <a className="about-dev-link" href="https://gin-and-tonnies.herokuapp.com/">Gin and Tonnies</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="about-dev-card">
                        <div className="about-dev-photo-container">
                            <img className="about-dev-image" src={lisaHeadshot}></img>
                        <div className="about-dev-info-container">
                            <div className="about-dev-name">Lisa Noor</div>
                            <div className="about-dev-link">
                            <div className="about-dev-link-container">
                                <a className="about-dev-link" href="https://github.com/Skulllady">github</a>
                                <a className="about-dev-link" href="https://www.linkedin.com/in/lisa-noor-hoque-976120208/">linkedin</a>
                                <div className="about-dev-project-links">
                                    <p>Other Apps by the developer:</p>
                                    <a className="about-dev-link" href="https://brainfood-app.herokuapp.com/users/login">brainfood</a>
                                    <a className="about-dev-link" href="https://captainslog-2323.herokuapp.com/">captainslog</a>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    <div className="about-dev-card">
                        <div className="about-dev-photo-container">
                            <img className="about-dev-image" src={patrickHeadshot}></img>
                        <div className="about-dev-info-container">
                            <div className="about-dev-name">Patrick Nusbaum</div>
                            <div className="about-dev-link"></div>
                            <div className="about-dev-link-container">
                                <a className="about-dev-link" href="https://github.com/patricknuttree">github</a>
                                <a className="about-dev-link" href="www.linkedin.com/in/patrick-nusbaum-mpa">linkedin</a>
                                <div className="about-dev-project-links">
                                    <p>Other Apps by the developer:</p>
                                    <a className="about-dev-link" href="https://travelscape-app.herokuapp.com/">travelscape</a>
                                    <a className="about-dev-link" href="https://the-pour.herokuapp.com/">The-Pour</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="about-dev-card">
                        <div className="about-dev-photo-container">
                            <img className="about-dev-image" src={jamieHeadshot}></img>
                        <div className="about-dev-info-container">
                            <div className="about-dev-name">Jamie Sullivan</div>
                            <div className="about-dev-link"></div>
                            <div className="about-dev-link-container">
                                <a className="about-dev-link" href="https://github.com/bilbopicard">github</a>
                                <a className="about-dev-link" href="https://www.linkedin.com/in/sullivan-jamie/">linkedin</a>
                                <div className="about-dev-project-links">
                                    <p>Other Apps by the developer:</p>
                                    <a className="about-dev-link" href="https://travelscape-app.herokuapp.com/">travelscape</a>
                                    <a className="about-dev-link" href="https://app-bottoms-up.herokuapp.com/signup">BottomsUp</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About