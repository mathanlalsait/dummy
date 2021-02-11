import {emailDisablePeriodURL} from '../constant'
import axios from 'axios'
import {GET_EMAIL_DISABLED_PERIOD_REQUEST} from 'redux/reducers/actionType/actionType'
import {GET_EMAIL_DISABLED_PERIOD_SUCCESS} from 'redux/reducers/actionType/actionType'
import {GET_EMAIL_DISABLED_PERIOD_FAILURE} from 'redux/reducers/actionType/actionType'

let config ={
    headers: {
        accept: 'application.json',
        warehouse: " Tyrefort"
    }
}

export function getEmailDisablePeriod(payload){
    return dispatch => {
        let response = axios.get(emailDisablePeriodURL, config)

             dispatch({
                 type: GET_EMAIL_DISABLED_PERIOD_REQUEST,
             })

         response.then(resp => {
             console.log('data response for disable period....', resp)
             dispatch({
                 type: GET_EMAIL_DISABLED_PERIOD_SUCCESS,
                 payload: resp.data
             })
         }) 
         
         .catch(error => {
             dispatch({
                 type: GET_EMAIL_DISABLED_PERIOD_FAILURE,
                 payload: error
             })
         })
    }
}