import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

//Custom Components
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <main>
            <div className="container-fluid">
                <section className="row section-header">
                    <div className="section-header-dot" />
                    <div className="col-md-12">
                        <div className="row">
                            <Content title="Welcome" size={7} offset={3}>
                                <p align="center" className="main-paragraph">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus ante sed odio feugiat, vel dictum elit pharetra.
                                   Phasellus eu lorem sit amet ligula congue sodales. Nulla rhoncus in lectus vitae tempor. Aenean sed egestas mi. Duis urna est,
                                   finibus ut nisl tristique, convallis mollis purus. Ut ac augue luctus, placerat ex nec, consequat nulla. Nam vitae fermentum enim.
                                </p>
                                <div className="row">
                                    <div className="col-md-3 col-md-offset-5">
                                        <div className="cta-divider" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-md-offset-5">
                                        <button className="btn btn-danger">See More</button>
                                    </div>
                                </div>
                            </Content>
                        </div>
                    </div>
                </section>
                <section className="row section-woods">
                    <div className="col-md-5 col-sm-6 hidden-xs" style={{paddingLeft: 0, paddingRight:0}}>
                        <div className="image-trees" />
                    </div>
                    <div className="col-md-6 col-md-offset-1 col-sm-6 col-xs-12">
                        <div className="background">
                            <div className="row">
                                <div className="col-md-7 col-md-offset-3 no-padd">
                                    <h2 className="content-title" style={{color: '#332e56'}}>Contact Me</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p align="center" className="cls-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus ante sed odio feugiat, vel dictum elit pharetra.
                                        Phasellus eu lorem sit amet ligula congue sodales. Nulla rhoncus in lectus vitae tempor. Aenean sed egestas mi. Duis urna est,
                                        finibus ut nisl tristique, convallis mollis purus. Ut ac augue luctus, placerat ex nec, consequat nulla. Nam vitae fermentum enim.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row">
                    <div className="Quotes">
                        <ul className="QuoteList">
                            <li className="QuoteList__item QuoteList__item--active" data-slug="coveteur">
                                <div className="QuoteList__test">
                                    Erika is a stunning representation of the raw power a simple interaction can make on a
                                    child's life
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
