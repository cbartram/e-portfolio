import React, {Component} from 'react';
import './PortfolioContent.css';

class PortfolioContent extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-5 col-md-offset-1">
                        <h2>{this.props.title}</h2>
                    </div>
                </div>
                <div className="row margin-bottom">
                    <div className="col-md-3 col-md-offset-1">
                        <div style=
                            {{
                                backgroundImage: `url("${this.props.src}")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize:`cover`,
                                height:`250px`
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis nisi
                            vitae leo accumsan mollis non quis sapien. Aliquam erat volutpat. Mauris mattis
                            vehicula volutpat. Fusce posuere porttitor purus eget porta. Morbi scelerisque leo
                            eu eros sagittis tincidunt. Donec leo lectus, rhoncus sed elit in, viverra venenatis
                            velit. Nunc leo magna, tincidunt id laoreet vel, pharetra vel lacus. Quisque ac
                            vestibulum ex. Donec elementum tincidunt venenatis. Fusce non odio suscipit,
                            faucibus augue sit amet, hendrerit eros. Phasellus eget libero nisl. In nec turpis
                            in quam ultrices interdum. Sed sed tortor eu lacus consequat vestibulum. Quisque
                            tristique odio sit amet nibh imperdiet, sed gravida nulla consequat. Maecenas tristiqu
                            e quam facilisis facilisis blandit. Donec lobortis viverra erat, in egestas dui accumsan id.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioContent;