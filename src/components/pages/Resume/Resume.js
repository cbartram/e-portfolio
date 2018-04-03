import React, {Component} from 'react';
import './Resume.css'

//Mui
import {
    Step,
    Stepper,
    StepContent,
    StepLabel
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

//Custom Components
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';

class Resume extends Component {
    constructor() {
        super();

        this.state = {
            stepIndex: 0,
        }
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 5) {
            this.setState({stepIndex: stepIndex + 1});
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    renderStepActions(step) {
        return (
            <div style={{margin: '12px 0'}}>
                <RaisedButton
                    label="Next"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    onClick={this.handleNext}
                    style={{margin:12}}
                    backgroundColor={"#d9534f"}
                    labelStyle={{color:'white'}}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {
        const {stepIndex} = this.state;

        return (
            <div>
                <Navigation/>
                    <section className="row splash">
                        <div className="col-md-2 col-md-offset-5 col-sm-2 col-sm-offset-5 col-xs-4 col-xs-offset-5">
                            <h1>Resume</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-md-offset-5 col-sm-2 col-sm-offset-5 col-xs-4 col-xs-offset-5">
                                <a href="https://s3.amazonaws.com/aeroscape-cache/Resume.pdf">
                                    <button type="button" className="btn btn-outline-primary">Download PDF</button>
                                </a>
                            </div>
                        </div>
                    </section>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-1">
                            <h2>Volunteer Experience</h2>
                        </div>
                    </div>
                    <section className="row resume">
                        <div className="col-md-10 col-md-offset-1">
                            <Stepper
                                activeStep={stepIndex}
                                linear={false}
                                orientation="vertical"
                            >
                                <Step>
                                    <StepLabel onClick={() => this.setState({stepIndex: 0})}>
                                        Community Hospice & Palliative Care (02/2018 – Present)
                                    </StepLabel>
                                    <StepContent>
                                        <p>
                                            Community PedsCare Child Life volunteer - Assisting with expressive care therapies,
                                            directed play, developmentally appropriate intervention techniques and support
                                            for children and families faced with a life-limiting and/or life- threating diagnosis.
                                        </p>
                                        {this.renderStepActions(0)}
                                    </StepContent>
                                </Step>
                                <Step>
                                    <StepLabel onClick={() => this.setState({stepIndex: 1})}>
                                        Wolfson Children's Hospital (01/2018 – Present)
                                    </StepLabel>
                                    <StepContent>
                                        <p>
                                            Family room volunteer - Offering children and families with social and
                                            emotional support, distraction from the hectic hospital environment via
                                            conversation, activities, and refreshments as well as facilitating a sense
                                            of normalcy in a medical setting.
                                        </p>
                                        {this.renderStepActions(1)}
                                    </StepContent>
                                </Step>
                                <Step>
                                    <StepLabel onClick={() => this.setState({stepIndex: 2})}>
                                        Hope Haven Children's Clinic & Family Center (01/2018 – Present)
                                    </StepLabel>
                                    <StepContent>
                                        <p>
                                            BASICS (Building Adaptable Skills and Increasing Capacity for Self-Sufficiency)
                                            youth program volunteer - Providing support to children with physical and/or
                                            developmental disabilities with a structured setting and development based
                                            activities to facilitate growth, learning, and fun.
                                        </p>
                                        {this.renderStepActions(2)}
                                    </StepContent>
                                </Step>
                                <Step>
                                    <StepLabel onClick={() => this.setState({stepIndex: 3})}>
                                        Ronald McDonald House (11/2017 – Present)
                                    </StepLabel>
                                    <StepContent>
                                        <p>
                                            House Warmer volunteer - Assisting with the general upkeep and tidiness of
                                            the Ronald McDonald house to provide children and families with a comfortable
                                            and safe environment. Fostering relationships with children and families
                                            staying in the house via conversation, activities, family style meals and
                                            emotional support.
                                        </p>
                                        {this.renderStepActions(3)}
                                    </StepContent>
                                </Step>
                                <Step>
                                    <StepLabel onClick={() => this.setState({stepIndex: 4})}>
                                        National Pediatric Cancer Foundation - FFTC JAX (10/2017 – Present)
                                    </StepLabel>
                                    <StepContent>
                                        <p>
                                            Committee member for the 2018 Fashion Funds the Cure Event sponsored by
                                            Dillard's benefitting pediatric cancer research - Assisting with identifying
                                            models for the show (children with pediatric cancer/survivors of pediatric cancer),
                                            finding community sponsors, selling tickets for the event, and building
                                            relationships with the children walking in the show.
                                        </p>
                                        {this.renderStepActions(4)}
                                    </StepContent>
                                </Step>
                                <Step>
                                    <StepLabel onClick={() => this.setState({stepIndex: 5})}>
                                        Independent Living Resource Center (09/2017 – Present)
                                    </StepLabel>
                                    <StepContent>
                                        <p>
                                            Spirit of the ADA Day volunteer - Celebrated the signing of the Americans with Disabilities
                                            Act with accessible activities, specialized programming, and relevant vendors at the
                                            Jacksonville Zoo & Gardens. "Ready to Achieve" youth mentorship volunteer -
                                            Assisting the Youth Services Director with programming to benefit
                                            youth with physical and/or developmental disabilities.
                                        </p>
                                        {this.renderStepActions(5)}
                                    </StepContent>
                                </Step>
                            </Stepper>
                        </div>
                    </section>
                <Footer/>
            </div>
        )
    }
}

export default Resume;