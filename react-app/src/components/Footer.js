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
                        <a className="footer-dev-link" href="https://github.com/jemcodes">github</a>
                        <NavLink className="footer-dev-link" to="https://www.linkedin.com/in/jemcodes/">linkedin</NavLink>
                    </div>
                    <div className="footer-dev">
                        <NavLink className="footer-dev-name-link" to="/about">
                            <div className="footer-dev-name" >Lisa Noor</div>
                        </NavLink>
                        <NavLink className="footer-dev-link" to="https://github.com/Skulllady">github</NavLink>
                        <NavLink className="footer-dev-link" to="https://www.linkedin.com/in/lisa-noor-hoque-976120208/">linkedin</NavLink>
                    </div>
                    <div className="footer-dev">
                        <NavLink className="footer-dev-name-link" to="/about">
                            <div className="footer-dev-name" >Patrick Nusbaum</div>
                        </NavLink>
                        <NavLink className="footer-dev-link" to="https://github.com/patricknuttree">github</NavLink>
                        <NavLink className="footer-dev-link" to="www.linkedin.com/in/patrick-nusbaum-mpa">linkedin</NavLink>
                    </div>
                    <div className="footer-dev">
                        <NavLink className="footer-dev-name-link" to="/about">
                            <div className="footer-dev-name" >Jamie Sullivan</div>
                        </NavLink>
                        <NavLink className="footer-dev-link" to="https://github.com/bilbopicard">github</NavLink>
                        <NavLink className="footer-dev-link" to="https://www.linkedin.com/in/sullivan-jamie/">linkedin</NavLink>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;