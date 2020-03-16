import React from 'react'
import './style.css'

function Nav() {
    return (
        <nav className="navbar is-transparent is-fixed-top">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                        <h1 className="title">LIFE OF MINE</h1>
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">

                    </div>
                    <div className="navbar-end">
                    <p className="buttons is-centered">
                        <a href="https://www.linkedin.com/in/madeleine-prak/" target="_blank" rel="noopener noreferrer"
                            className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fab fa-linkedin-in"></i>
                            </span>
                        </a>
                        <a href="https://github.com/madeleineprak" target="_blank" rel="noopener noreferrer" className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fab fa-github-alt"></i>
                            </span>
                        </a>
                        <a href="https://twitter.com/devmadeleine" target="_blank" rel="noopener noreferrer" className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fab fa-twitter"></i>
                            </span>
                        </a>
                        {/* <a href="mailto:contact@madeleineprak.com" target="_blank" rel="noopener noreferrer" className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </a>
                        <a href="tel:425-737-8950" target="_blank" rel="noopener noreferrer" className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fas fa-phone"></i>
                            </span>
                        </a> */}
                    </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;