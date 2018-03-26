import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './content.css';

class Content extends Component {
    constructor() {
        super();

        this.state = {
            offsetString: ''
        }
    }

    componentDidMount = () => {
        this.props.offset && this.setState({offsetString: `col-md-offset-${this.props.offset}`})
    };


    render() {
        return (
            <div className={`col-md-${this.props.size} ${this.state.offsetString}`}>
                <div className="background">
                    <div className="row">
                        <div className="col-md-7 col-md-offset-3 no-padd">
                            <h2 className="content-title" style={this.props.titleStyle}>{this.props.title}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
