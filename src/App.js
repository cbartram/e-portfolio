import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './css/App.css';
import trees from './images/snowy_trees.jpg';

//Custom Components
import Content from './components/Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
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
                              <a className="navbar-brand" href="#home">
                                  <p>Erika Pickard</p>
                              </a>
                              <li><a href="#home">Home</a></li>
                              <li><a href="#about">About Me</a></li>
                              <li><a href="#resume">Resume</a></li>
                              <li><a href="#practicum">Practicum</a></li>
                              <li><a href="#portfolio">Portfolio</a></li>
                              <li><a href="#contact">Contact Me</a></li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </header>
        <main>
            <div className="container-fluid">
                <section className="row section-header">
                    <div className="section-header-dot" />
                    <div className="col-md-12">
                        <div className="row">
                            <Content title="About Me" size={7} offset={3}>
                                <p align="center">
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
                    <div className="col-md-5 col-sm-6 hidden-xs no-padd">
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
                      <a href="#"><i className="fa fa-phone" /></a>
                      <a href="https://www.linkedin.com/in/erika-pickard-55b595149/"><i className="fa fa-linkedin" /></a>
                  </div>
              </div>
          </footer>
      </div>
    );
  }
}

export default App;
