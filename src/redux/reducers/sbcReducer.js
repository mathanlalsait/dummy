import {GET_SBC_DATA_REQUEST} from 'redux/reducers/actionType/actionType'
import {GET_SBC_DATA_SUCCESS} from 'redux/reducers/actionType/actionType'
import {GET_SBC_DATA_FAILURE} from 'redux/reducers/actionType/actionType'

export default function sbcReducer(state =[], action) {

    switch(action.type){

        case GET_SBC_DATA_REQUEST:
            return []

        case GET_SBC_DATA_SUCCESS:
            return action.payload;
            
        case GET_SBC_DATA_FAILURE:
            return action.payload;

        default: return state
    }
}