import { call, put, takeLatest } from 'redux-saga/effects';
import {loadStarWarsListSuccess} from './actions';
import {StarWarsAPIService, StarWarsAPICharactersService} from '../../services/StarWarsService';
import {startLoading, stopLoading} from '../LoadingStarWars/actions'

function* loadStarWarsRequest({payload}){
    yield put(startLoading());
    try{
        const starWarsList = yield [call(StarWarsAPIService, payload.apiUrl)];                         
        var i;              
        var starwarslistValues = new Array();
        for( i = 0; i <= 6; i++){
            const starWarsList1Character1 = yield [call(StarWarsAPICharactersService, starWarsList[0].data.results[i].characters[0])];
            const starWarsList1Character2 = yield [call(StarWarsAPICharactersService, starWarsList[0].data.results[i].characters[1])];
            const starWarsList1Character3 = yield [call(StarWarsAPICharactersService, starWarsList[0].data.results[i].characters[2])];
            var movieDetailss = new movieDetails(
                starWarsList[0].data.results[i].episode_id,
                starWarsList[0].data.results[i].title,
                starWarsList[0].data.results[i].director,                
                starWarsList1Character1[0].data.name,
                starWarsList1Character2[0].data.name,
                starWarsList1Character3[0].data.name,
                starWarsList[0].data.results[i].opening_crawl,
            );
            starwarslistValues.push(movieDetailss);
        }          
        yield put(loadStarWarsListSuccess(starwarslistValues));
        yield put(stopLoading());
    }
    catch(error){
        console.log("Failure");
        console.log(error);
        return;
    }
}

function movieDetails(id,title,director,character1, character2, character3,opening_crawl){
    this.id = id;
    this.title = title;
    this.director = director;
    this.character1 = character1;
    this.character2 = character2;
    this.character3 = character3;
    this.opening_crawl = opening_crawl;

}
export function* watchRequestSage()
{
    yield[
        takeLatest("LOAD_STARWARS_REQUEST", loadStarWarsRequest)
    ];
}