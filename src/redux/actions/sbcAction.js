import {sbcURL} from '../constant'
import axios from 'axios'
import {GET_SBC_DATA_REQUEST} from 'redux/reducers/actionType/actionType'
import {GET_SBC_DATA_SUCCESS} from 'redux/reducers/actionType/actionType'
import {GET_SBC_DATA_FAILURE} from 'redux/reducers/actionType/actionType'

let config ={
    headers: {
        accept: 'application/json',
    }
}

export function getSBCDataPackage(payload){
    return dispatch =>{
        let response = axios.get(sbcURL, config)

            dispatch({
                type: GET_SBC_DATA_REQUEST,  
            })

        response.then(resp => {
            //console.log('response data.....', resp.data)
            dispatch({
                type: GET_SBC_DATA_SUCCESS,
                payload: resp.data
            })
        })
        .catch(error => {
            dispatch({
                type: GET_SBC_DATA_FAILURE,
                payload: error
            })
        })
    }

}