import { combineReducers } from 'redux'
import {ADD_MOVIES,ADD_MOVIE_TO_LIST,ADD_SEARCH_RESULT,ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE,SET_SHOW_FAVORITES} from '../actions' 

const InitalMoviesState={
    list:[],
    favorites:[],
    showFavorites:false
}
export function movies(state = InitalMoviesState,action){
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
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list:[action.movie,...state.list]
            }
        default:
            return state;
    }
}

const initialSearchState = {
    result:{},
    showSearchResults:false,
};
export function search(state = initialSearchState,action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result:action.movie,
                showSearchResults:true
            }
            case ADD_MOVIE_TO_LIST:
                return {
                    ...state,
                    showSearchResults:false
                }
        default:
            return state;
    }
    
}
const initialRootState = {
    movies:InitalMoviesState,
    search:initialSearchState
}
// export default function rootReducer(state = initialRootState,action){
//     return {
//         movies:movies(state.movies,action), // movies managed by movies reducer
//         search: search(state.search,action) // search managed by search reducer
//     }
// }
 export default combineReducers({
     movies:movies,
     search:search
 })
