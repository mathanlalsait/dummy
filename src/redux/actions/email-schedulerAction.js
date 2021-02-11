import {emailSchedulerURL} from 'redux/constant'
import axios from 'axios'
import {GET_EMAIL_SCHEDULER_DATA_REQUEST} from 'redux/reducers/actionType/actionType'
import {GET_EMAIL_SCHEDULER_DATA_SUCCESS} from 'redux/reducers/actionType/actionType'
import {GET_EMAIL_SCHEDULER_DATA_FAILURE} from 'redux/reducers/actionType/actionType'

let config ={
    headers: {
        accept: 'application.json',
        warehouse: "Tyrefort"
    }
}

export function getEmailSchedulerData(payload){
       return dispatch => {
           let response = axios.get(emailSchedulerURL, config)

           dispatch({
                  type: GET_EMAIL_SCHEDULER_DATA_REQUEST
           })
        
           response.then(resp =>{
               //console.log('email scheduler....', resp)
               dispatch({
                   type: GET_EMAIL_SCHEDULER_DATA_SUCCESS,
                   payload: resp.data
               })
           })
           
           .catch(error =>{
               dispatch({
                   type: GET_EMAIL_SCHEDULER_DATA_FAILURE,
                   payload: error
               })
           })

       }
}

