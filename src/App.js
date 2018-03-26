import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './css/App.css';

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
                    <p align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus ante sed odio feugiat, vel dictum elit pharetra.
                        Phasellus eu lorem sit amet ligula congue sodales. Nulla rhoncus in lectus vitae tempor. Aenean sed egestas mi. Duis urna est,
                        finibus ut nisl tristique, convallis mollis purus. Ut ac augue luctus, placerat ex nec, consequat nulla. Nam vitae fermentum enim.
                    </p>
                </section>
            </div>
        </main>
      </div>
    );
  }
}

export default App;
