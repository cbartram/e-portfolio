import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'

//Custom Components
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <main>
                    <section className="row">
                        <div className="col-md-2 col-md-offset-2">
                            <h1 align="center">Contact</h1>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Contact;