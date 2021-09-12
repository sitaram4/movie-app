
//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE='REMOVE_FROM_FAVORITE';
export const SET_SHOW_FAVORITES='SET_SHOW_FAVORITES';

//action creators
export function addMoveis(movies){
    return {
        type:'ADD_MOVIES',
        movies:movies
    }
}

export function addFavorite(movie){
    return {
        type:'ADD_TO_FAVORITE',
        movie
    }
}

export function removeFavorite(movie){
    return {
        type:'REMOVE_FROM_FAVORITE',
        movie
    }
}

export function setShowFavorites(val){
    return {
        type:'SET_SHOW_FAVORITES',
        val
    }
}
// {
//     type:'ADD_MOVIES',
//     movies:[]
// }