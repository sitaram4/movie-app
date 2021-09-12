
//action types
export const ADD_MOVIES = 'ADD_MOVIES';

//action creators
export function addMoveis(movies){
    return {
        type:'ADD_MOVIES',
        movies:movies
    }
}
// {
//     type:'ADD_MOVIES',
//     movies:[]
// }