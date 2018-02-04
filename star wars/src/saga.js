import {watchRequestSage} from './Components/StarWarsHomePage/sagas';

function* rootSaga(){
    yield[
        watchRequestSage()
    ];
}

export default rootSaga;