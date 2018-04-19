import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Auth from '../../../Auth';



export default class Login extends Component {
    constructor() {
        super();

        this.state = {
          form: {
              username: '',
              password: '',
          },
          error: {
              username: '',
              password: ''
          }
        };
    }

    handleSubmit = () => {
        let {form, error} = this.state;
        let err = false;

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
        //TODO CHANGE TO THE DEST URL
        !err &&
        fetch('http://localhost:3001/admin/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        }).then(res => res.json()).then(body => {
            //Show error/success messages
            if(typeof body.user.message !== 'undefined') {
                if(body.user.message.includes('Password')) {
                    this.setState({error: {username: '', password: body.user.message}})
                } else {
                    this.setState({error: {username: body.user.message, password: ''}})
                }
            } else {
                //Successful Login
                console.log("Successful Login!", body);
                Auth.check();
                this.setState({ error: {username: '', password: ''}})
            }
        });
    };

    handleChange = (value, type) => {
        let { form } = this.state;
        form[type] = value;
        this.setState(form)
    };

    render() {
        return (
            <div className="container">
                <div className="col-md-4 col-md-offset-3">
                    <h2>Admin Login</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <TextField floatingLabelText="Username" errorText={this.state.error.username} value={this.state.form.username} onChange={e => this.handleChange(e.target.value, 'username')}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <TextField floatingLabelText="Password" type="password" errorText={this.state.error.password} value={this.state.form.password} onChange={e => this.handleChange(e.target.value, 'password')}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <RaisedButton label="Login" onClick={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        )
    }
}