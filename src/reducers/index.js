import {ADD_MOVIES,ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE,SET_SHOW_FAVORITES} from '../actions' 

const InitalMoviesState={
    list:[],
    favorites:[],
    showFavorites:false
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
        case ADD_TO_FAVORITE:
            return {
            ...state,
            favorites:[action.movie,...state.favorites]
        }
        case REMOVE_FROM_FAVORITE:
            const filteredArray = state.favorites.filter(
                movie => movie.Title !== action.movie.Title
            )
            return{
                ...state,
                favorites:filteredArray
            }
        case SET_SHOW_FAVORITES:
            return{
                ...state,
                showFavorites:action.val
            }
        default:
            return state;
    }
}

