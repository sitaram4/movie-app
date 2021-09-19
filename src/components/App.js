import React from 'react';
import {data} from '../data';
import {connect} from 'react-redux'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMoveis, setShowFavorites } from '../actions';
// import { StoreContext} from '../index'
class App extends React.Component {
  componentDidMount(){
    //make api call
    //dispatch action

   
    this.props.dispatch(addMoveis(data))

  }
  isMovieFavorite = (movie) =>{
    const {movies} = this.props;
    const {favorites} = movies;
    const idx = favorites.indexOf(movie);

    if(idx!==-1){
      //found movie
      return true;
    }
    return false;
  }
  onChangeTab =(val) =>{
    this.props.dispatch(setShowFavorites(val))
  }
  render(){
    const {movies,search} = this.props;
    const {list,favorites,showFavorites} = movies;//[] but now {list:[],favorite:[]} now it is changed as {movies:{},search:{}}
    console.log('RENDER',this.props);
    const displayMovies = showFavorites?favorites:list
{/* {consumer expects a function}
        now how to pass store to componentDidMount and other functions??
        sol: use a wrapper
        */}
    // return (
    //   <StoreContext.Consumer>
    //     {() =>{
    //       return 
    //     }}
    //   </StoreContext.Consumer>
    // )
    return (
    <div className="App">
      <Navbar search = {search}/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavorites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavorites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favorites</div>
        </div>
      </div>
      <div className="list">
        {displayMovies.map((movie,index) =>(
          <MovieCard 
            movie={movie}
            key={`movies-${index}`} 
            dispatch={this.props.dispatch}
            isFavourite={this.isMovieFavorite(movie)}/>
        ))}
      </div>
      {displayMovies.length === 0 ? <div className="no-movies"> No Movies to display </div>:null}
    </div>
    );
  
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state){
  return {
    movies:state.movies,
    search:state.search
  }
}
const connectedAppComponent =connect(mapStateToProps)(App);
export default connectedAppComponent;
