
//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE='REMOVE_FROM_FAVORITE';
export const SET_SHOW_FAVORITES='SET_SHOW_FAVORITES';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
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
export function addMovieToList(movie){
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}
export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie =>{
            console.log('movie',movie);
            //dispatch an action
            dispatch(addMovieSearchResult(movie));

        })
    }
    
}

export function addMovieSearchResult(movie){
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
}
// {
//     type:'ADD_MOVIES',
//     movies:[]
// }