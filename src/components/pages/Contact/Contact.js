import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'

//Custom Components
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            form: {
                title: '',
                email: '',
                message: ''
            },
            successMessage: ''
        };
        }

    /**
     * Handles updating the state with changes to each form field
     * @param value Any Current Form Value
     * @param field String field name
     */
    handleChange = (value, field) => {
        let {form} = this.state;
        form[field] = value;
        this.setState({form, successMessage: ''})
    };

    /**
     * Handles Submitting the Form
     */
    handleSubmit = () => {
        let {form} = this.state;
        let err = false;

        //TODO Validate Email
        for(let prop in form) {
            if(form.hasOwnProperty(prop)) {
                if(form[prop].length <= 0) {
                    //Throw error message
                    console.error("One of the fields is empty");
                    err = true;
                }
            }
        }

        //Submit the form
        !err &&
        fetch('https://imanpf4azc.execute-api.us-east-1.amazonaws.com/Dev/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.form), //Post the Form data stored in react state
        }).then(res => res.json()).then(body => {
          // if(body.success) {
               //At this point the user is succesfully logged in
               localStorage.setItem("user", body);

               this.setState({
                   form: {
                       title: '',
                       email: '',
                       message: ''
                   },
                   successMessage: 'Your information has been sent successfully!'
               })
           //}
        }).catch(err => {
           console.log("Error Occurred -> Check DynamoDB for Insertion State");
           this.setState({
                form: {
                    title: '',
                    email: '',
                    message: ''
                },
                successMessage: 'Your information has been sent successfully!'
            })

        });

    };


    render() {
        return (
            <div>
                <Navigation/>
                <main>
                    <section className="row" id="contact">
                        <div className="col-md-4 col-md-offset-4">
                            <h1 align="center">Contact Me</h1>
                        </div>
                    </section>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 margin-bottom">
                            {this.state.successMessage.length > 0 && <div className="alert alert-success">{this.state.successMessage}</div>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 margin-bottom">
                            <input type="text" value={this.state.form.title} className="form-control" onChange={e => this.handleChange(e.target.value, 'title')} name="title" placeholder="Title" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 margin-bottom">
                            <input type="email" value={this.state.form.email} onChange={e => this.handleChange(e.target.value, 'email')}  className="form-control" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 margin-bottom">
                            <textarea rows="11" value={this.state.form.message} onChange={e => this.handleChange(e.target.value, 'message')}  cols="100" className="form-control" name="message" placeholder="Message" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-md-offset-5 margin-bottom-large">
                            <button type="button" onClick={this.handleSubmit} className="btn btn-danger">Submit</button>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Contact;