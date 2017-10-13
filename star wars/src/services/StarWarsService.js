import axios from 'axios';

export function StarWarsAPIService(apiURL){
    return axios.get(apiURL,{headers:{ 'Content-Type': 'application/json' }})
    .then(starWarsList => starWarsList);
};

export function StarWarsAPICharactersService(apiURL){
    return axios.get(apiURL,{headers:{ 'Content-Type': 'application/json' }})
    .then(starWarsChar => starWarsChar);
};
