import {ADD_MOVIES,ADD_FAVORITE} from '../actions' 

const InitalMoviesState={
    list:[],
    favorites:[]
}
export default function movies(state = InitalMoviesState,action){
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }
        case ADD_FAVORITE:
        return {
            ...state,
            favorites:[action.movie,...state.favorites]
        }
        default:
            return state;
    }
}

