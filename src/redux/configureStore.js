import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import sbcReducer from './reducers/sbcReducer'
import emailReducer from './reducers/emailReducer'
import emailSchedulerReducer from './reducers/email-schedulerReducer'
import emailDisablePeriodReducer from './reducers/email-disablePeriodReducer'

export default function configureStore(initialState) {

    let reducer = combineReducers({
        sbcTableReducer: sbcReducer,
        emailReducer: emailReducer,
        emailSchedulerReducer: emailSchedulerReducer,
        emailDisablePeriodReducer: emailDisablePeriodReducer
    });

    let enhancements = [applyMiddleware(thunk)];

    if(typeof window !== 'undefined' && window.__REDUX__DEVTOOLS__EXTENSION__)
    {
        enhancements.push(window.__REDUX__DEVTOOLS__EXTENSION__());
    }
   
    return createStore(reducer, initialState, compose(...enhancements));
}
