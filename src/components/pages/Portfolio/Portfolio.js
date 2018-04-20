import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css'

//Custom Components
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';
import PortfolioContent from '../../Portfolio-Content/PortfolioContent';


class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <main>
                    <section className="row" id="portfolio">
                        <div className="col-md-2 col-md-offset-5">
                            <h1 align="center" className="portfolio-header">Experiences</h1>
                        </div>
                    </section>
                    <PortfolioContent title="Fashion Funds the Cure - Jax" src="https://images.unsplash.com/photo-1510093119537-f102b0e4460a?ixlib=rb-0.3.5&s=0eee1e9b1fb7dd0e1e44338d8b22f439&auto=format&fit=crop&w=2850&q=80"/>
                    <PortfolioContent title="Fashion Funds the Cure - Jax" src="https://images.unsplash.com/photo-1509833214245-2078371af406?ixlib=rb-0.3.5&s=329bb81bdc150be47294638a425e18e9&auto=format&fit=crop&w=2048&q=80"/>
                    <PortfolioContent title="Fashion Funds the Cure - Jax" src="https://images.unsplash.com/photo-1504280278378-abdab9211774?ixlib=rb-0.3.5&s=7a4736050d345dc1e183508f5f5f3dc9&auto=format&fit=crop&w=2100&q=80"/>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Portfolio;