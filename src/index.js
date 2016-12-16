import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

import { MyBgg } from './components/MyBgg';
import { Users } from './components/Users';
import { Games } from './components/Games';
import { BGGContainer } from './container/index.js'


ReactDOM.render(
    <div>
        <Router history={hashHistory}>
            <Route path="/" component={BGGContainer}>
                <Route path="/users" component={Users} />
                <Route path="/games" component={Games} />
            </Route>
        </Router>        
    </div>
    , document.getElementById('app'));
