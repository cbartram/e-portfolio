import React, {Component} from 'react';
import './Resume.css'

//Custom Components
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';

class Resume extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                    <section className="row resume">
                        <div className="col-md-4 col-md-offset-3">
                            <h2>Resume</h2>
                        </div>
                    </section>
                <Footer/>
            </div>
        )
    }
}

export default Resume;