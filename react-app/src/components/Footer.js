import React from 'react'
import "./styles/footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-main-container">
                <div id="footer-dev-title">Developers</div>
                <div className="footer-devs-container">
                    <div className="footer-dev">
                        <NavLink className="footer-dev-name-link" to="/about">
                            <div className="footer-dev-name" >jane Martin</div>
                        </NavLink>
                        <a className="footer-dev-link" href="https://github.com/jemcodes" target="_blank">github</a>
                        <a className="footer-dev-link" href="https://www.linkedin.com/in/jemcodes/" target="_blank">linkedin</a>
                    </div>
                    <div className="footer-dev">
                        <NavLink className="footer-dev-name-link" to="/about">
                            <div className="footer-dev-name" >Lisa Noor</div>
                        </NavLink>
                        <a className="footer-dev-link" href="https://github.com/Skulllady" target="_blank" >github</a>
                        <a className="footer-dev-link" href="https://www.linkedin.com/in/lisa-noor-hoque-976120208/" target="_blank">linkedin</a>
                    </div>
                    <div className="footer-dev">
                        <NavLink className="footer-dev-name-link" to="/about">
                            <div className="footer-dev-name" >Patrick Nusbaum</div>
                        </NavLink>
                        <a className="footer-dev-link" href="https://github.com/patricknuttree" target="_blank">github</a>
                        <a className="footer-dev-link" href="https://www.linkedin.com/in/patrick-nusbaum-mpa" target="_blank">linkedin</a>
                    </div>
                    <div className="footer-dev">
                        <NavLink className="footer-dev-name-link" to="/about">
                            <div className="footer-dev-name" >Jamie Sullivan</div>
                        </NavLink>
                        <a className="footer-dev-link" href="https://github.com/bilbopicard" target="_blank">github</a>
                        <a className="footer-dev-link" href="https://www.linkedin.com/in/sullivan-jamie/" target="_blank">linkedin</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
