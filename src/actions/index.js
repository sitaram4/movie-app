
//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVORITE = 'ADD_FAVORITE';

//action creators
export function addMoveis(movies){
    return {
        type:'ADD_MOVIES',
        movies:movies
    }
}

export function addFavorite(movie){
    return {
        type:'ADD_FAVORITE',
        movie
    }
}
// {
//     type:'ADD_MOVIES',
//     movies:[]
// }