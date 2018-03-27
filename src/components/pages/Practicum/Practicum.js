import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './practicum.css'

//Custom Components
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';
import PracticumContent from '../../Practicum-Content/PracticumContent';

class Practicum extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <main>
                    <section className="row">
                        <div className="col-md-2 col-md-offset-5">
                            <h1 align="center">Practicum</h1>
                        </div>
                    </section>
                    <PracticumContent/>
                    <PracticumContent/>
                    <PracticumContent/>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Practicum;