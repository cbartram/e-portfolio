import React, {Component} from 'react';
import './Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <header role="banner">
                <nav id="navbar-primary" className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-primary-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="fa fa-bars" />
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-primary-collapse">
                            <ul className="nav navbar-nav">
                                <a className="navbar-brand" href="/">
                                    <p>Erika Pickard</p>
                                </a>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Me</a></li>
                                <li><a href="/resume">Resume</a></li>
                                <li><a href="/practicum">Practicum</a></li>
                                <li><a href="/experiences">Experiences</a></li>
                                <li><a href="/contact">Contact Me</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navigation;