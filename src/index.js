import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import App from './App';
import About from './components/pages/About/About';

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={About} />
            </Switch>
        </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();