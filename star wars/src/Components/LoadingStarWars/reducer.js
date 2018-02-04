const initialState = 0;
function LoadingStarWarsReducer(state= initialState, action){
    switch(action.type){
        case 'START_LOADING' :                 
        return state + 1; 
        break;    
        case 'STOP_LOADING' :                 
        return state - 1; 
        break;    
        default:
        return state;
    }
}

export default LoadingStarWarsReducer;