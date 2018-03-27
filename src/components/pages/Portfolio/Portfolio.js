import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css'

//Custom Components
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <main>
                    <section className="row">
                        <div className="col-md-2 col-md-offset-2">
                            <h1 align="center">Portfolio</h1>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Portfolio;