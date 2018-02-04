import {fromJS} from 'immutable';

const initialState = fromJS({starWarsList : {}})
export function StarWarsHomePageReducer(state= initialState, action){
    switch(action.type){
        case 'LOAD_STARWARS_SUCCESS' :         
        if(action.starWarsList != null)
        return state.set('StarWarsList', action.starWarsList); 
        break;    
        default:
        return state;
    }
}