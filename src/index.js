import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import App from './App';
import About from './components/pages/About/About';
import Resume from './components/pages/Resume/Resume.js';
import Practicum from './components/pages/Practicum/Practicum';
import Portfolio from './components/pages/Portfolio/Portfolio';

const muiTheme = getMuiTheme({
    stepper: {
        iconColor: '#332e56' // or logic to change color
    }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/practicum" component={Practicum} />
                    <Route exact path="/portfolio" component={Portfolio} />
                </Switch>
            </BrowserRouter>
    </MuiThemeProvider>, document.getElementById('root'));

registerServiceWorker();