export function loadStarWarsListRequest(payload){
    return {
        type: "LOAD_STARWARS_REQUEST",
        payload: payload
    }
}

export function loadStarWarsListSuccess(starWarsList){
    
    return{
        type:"LOAD_STARWARS_SUCCESS",
        starWarsList: starWarsList       
    }
}