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
        if (stepIndex < 2) {
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
                        <div className="col-md-2 col-md-offset-5">
                            <h1 align="center">Resume</h1>
                        </div>
                    </section>
                    <section className="row resume">
                        <div className="col-md-10 col-md-offset-1">
                            <Stepper
                                activeStep={stepIndex}
                                linear={false}
                                orientation="vertical"
                            >
                                <Step>
                                    <StepLabel onClick={() => this.setState({stepIndex: 0})}>
                                        Holliser - January 2012
                                    </StepLabel>
                                    <StepContent>
                                        <p>
                                            For each ad campaign that you create, you can control how much
                                            you're willing to spend on clicks and conversions, which networks
                                            and geographical locations you want your ads to show on, and more.
                                        </p>
                                        {this.renderStepActions(0)}
                                    </StepContent>
                                </Step>
                                <Step>
                                    <StepLabel onClick={() => this.setState({stepIndex: 1})}>
                                        Rainbow Pediatrics - November 2017
                                    </StepLabel>
                                    <StepContent>
                                        <p>An ad group contains one or more ads which target a shared set of keywords.</p>
                                        {this.renderStepActions(1)}
                                    </StepContent>
                                </Step>
                                <Step>
                                    <StepLabel onClick={() => this.setState({stepIndex: 2})}>
                                        Trasca & Co - March 2015
                                    </StepLabel>
                                    <StepContent>
                                        <p>
                                            Try out different ad text to see what brings in the most customers,
                                            and learn how to enhance your ads using features like ad extensions.
                                            If you run into any problems with your ads, find out how to tell if
                                            they're running and how to resolve approval issues.
                                        </p>
                                        {this.renderStepActions(2)}
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