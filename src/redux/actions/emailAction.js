import {emailURL} from '../constant'
import axios from 'axios'
import {GET_EMAIL_DATA_REQUEST} from 'redux/reducers/actionType/actionType'
import {GET_EMAIL_DATA_SUCCESS} from 'redux/reducers/actionType/actionType'
import {GET_EMAIL_DATA_FAILURE} from 'redux/reducers/actionType/actionType'

let config ={
    headers: {
        accept: 'application.json',
        warehouse: " Tyrefort"
    }
}

export function getEmailDataPackage(payload){
    return dispatch => {
        let response = axios.get(emailURL, config)

             dispatch({
                 type: GET_EMAIL_DATA_REQUEST,
             })

         response.then(resp => {
             //console.log('data response....', resp)
             dispatch({
                 type: GET_EMAIL_DATA_SUCCESS,
                 payload: resp.data
             })
         }) 
         
         .catch(error => {
             dispatch({
                 type: GET_EMAIL_DATA_FAILURE,
                 payload: error
             })
         })
    }
}