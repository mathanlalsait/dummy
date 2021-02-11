import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import {hot} from 'react-hot-loader/root'
//import 'App.scss';

import Home from 'Dashboard/home'
import SBCIndex from 'Dashboard/SBC-Index'
import SolihullIndex from 'Dashboard/Solihull-Index'
import EmailIndex from 'Dashboard/Email-Index'

let store = configureStore()

function App(){
  return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/sbc" component={SBCIndex} />
                    <Route path="/solihullSBC" component={SolihullIndex} />
                    <Route path="/email" component={EmailIndex} />
                </Switch>
            </Router>
       </Provider>
  );
}

export default hot(App);
