import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'

//Custom Components
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';
import Content from '../../Content/Content';

class About extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <main>
                    <section className="row image-splash">
                        <div className="col-md-2 col-md-offset-2">
                            <h1 align="center">About Me</h1>
                        </div>
                    </section>
                    <section className="row text">
                        <div className="col-md-3 col-md-offset-1">
                            <div className="image-self" />
                        </div>
                        <div className="col-md-8">
                            <Content title="Child Life Journey" size={9} offset={2} titleStyle={{color:'#332e56'}}>
                                <p align="center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus ante sed odio feugiat, vel dictum elit pharetra.
                                    Phasellus eu lorem sit amet ligula congue sodales. Nulla rhoncus in lectus vitae tempor. Aenean sed egestas mi. Duis urna est,
                                    finibus ut nisl tristique, convallis mollis purus. Ut ac augue luctus, placerat ex nec, consequat nulla. Nam vitae fermentum enim.
                                </p>
                            </Content>
                        </div>
                    </section>
                    <section className="row text">
                        <div className="col-md-8">
                            <Content title="Additional Content" size={9} offset={2} titleStyle={{color:'#332e56'}}>
                                <p align="center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus ante sed odio feugiat, vel dictum elit pharetra.
                                    Phasellus eu lorem sit amet ligula congue sodales. Nulla rhoncus in lectus vitae tempor. Aenean sed egestas mi. Duis urna est,
                                    finibus ut nisl tristique, convallis mollis purus. Ut ac augue luctus, placerat ex nec, consequat nulla. Nam vitae fermentum enim.
                                </p>
                            </Content>
                        </div>
                        <div className="col-md-3">
                            <div className="img-thumbnail image-self-2" />
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default About;