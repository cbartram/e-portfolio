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
                    <PortfolioContent title="Fashion Funds the Cure - Jax" src="https://s3.amazonaws.com/erika-portfolio/police.jpeg"/>
                    <PortfolioContent title="Fashion Funds the Cure - Jax" src="https://s3.amazonaws.com/erika-portfolio/police.jpeg"/>
                    <PortfolioContent title="Fashion Funds the Cure - Jax" src="https://s3.amazonaws.com/erika-portfolio/police.jpeg"/>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Portfolio;