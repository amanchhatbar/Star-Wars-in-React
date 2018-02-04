import {combineReducers} from 'redux-immutable';
import {StarWarsHomePageReducer} from './Components/StarWarsHomePage/reducer';
import LoadingStarWarsReducer from './Components/LoadingStarWars/reducer';


export default function createReducer(){
    return combineReducers({
        starWarsHomePageReducer: StarWarsHomePageReducer,
        starWarsLoadingReducer: LoadingStarWarsReducer
    });
}