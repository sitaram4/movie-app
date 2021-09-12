import {ADD_MOVIES} from '../actions' 

const InitalMoviesState={
    list:[],
    favorites:[]
}
export default function movies(state = InitalMoviesState,action){
    if(action.type===ADD_MOVIES){
        return {
            ...state,
            list:action.movies
        };
    }
    return state;
}

