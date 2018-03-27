import React, {Component} from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="footer-distributed">
                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker" />
                        <p><span>8306 Lincoln Lane</span> McClean, Virginia 22102</p>
                    </div>
                    <div>
                        <i className="fa fa-phone" />
                        <p>(407)-247-0519</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope" style={{ fontSize: '20px'}} />
                        <p><a href="mailto:pickarderika@gmail.com">pickarderika@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>Erika Pickard</span>
                        You can find me on Facebook, Twitter, and LinkedIn
                        at the links below.
                    </p>
                    <div className="footer-icons">
                        <a href="mailto:pickarderika@gmail.com"><i className="fa fa-envelope" /></a>
                        <a href="#phone"><i className="fa fa-phone" /></a>
                        <a href="https://www.linkedin.com/in/erika-pickard-55b595149/"><i className="fa fa-linkedin" /></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;