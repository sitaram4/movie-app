import {ADD_MOVIES,ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE,SET_SHOW_FAVORITES} from '../actions' 

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
        default:
            return state;
    }
}

const initialSearchState = {
    result:{}
};
export function search(state = initialSearchState,action){
    return state;
}
const initialRootState = {
    movies:InitalMoviesState,
    search:initialSearchState
}
export default function rootReducer(state = initialRootState,action){
    return {
        movies:movies(state.movies,action), // movies managed by movies reducer
        search: search(state.search,action) // search managed by search reducer
    }
}

