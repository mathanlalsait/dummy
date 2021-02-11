import {GET_EMAIL_DISABLED_PERIOD_REQUEST} from 'redux/reducers/actionType/actionType'
import {GET_EMAIL_DISABLED_PERIOD_SUCCESS} from 'redux/reducers/actionType/actionType'
import {GET_EMAIL_DISABLED_PERIOD_FAILURE} from 'redux/reducers/actionType/actionType'

export default function emailDisablePeriodReducer(state =[], action){

    switch(action.type){
       
        case GET_EMAIL_DISABLED_PERIOD_REQUEST:
            return []

        case GET_EMAIL_DISABLED_PERIOD_SUCCESS:
            return action.payload
            
        case GET_EMAIL_DISABLED_PERIOD_FAILURE:
            return action.payload
        
        default : return state    
    }
}