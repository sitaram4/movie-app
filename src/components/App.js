import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMoveis, setShowFavorites } from '../actions';
class App extends React.Component {
  componentDidMount(){
    //make api call
    //dispatch action

    const {store} = this.props;
    store.subscribe(() =>{
      console.log('UPDATED');
      this.forceUpdate();//not generally used will change in the future
    });
    store.dispatch(addMoveis(data))
    console.log('STATE: ',store.getState())

  }
  isMovieFavorite = (movie) =>{
    const {movies} = this.props.store.getState();
    const {favorites} = movies;
    const idx = favorites.indexOf(movie);

    if(idx!==-1){
      //found movie
      return true;
    }
    return false;
  }
  onChangeTab =(val) =>{
    this.props.store.dispatch(setShowFavorites(val))
  }
  render(){
    const {movies,search} = this.props.store.getState();
    const {list,favorites,showFavorites} = movies;//[] but now {list:[],favorite:[]} now it is changed as {movies:{},search:{}}
    console.log('RENDER',this.props.store.getState());
    const displayMovies = showFavorites?favorites:list
    return (
    <div className="App">
      <Navbar dispatch={this.props.store.dispatch} search = {search}/>
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
            dispatch={this.props.store.dispatch}
            isFavourite={this.isMovieFavorite(movie)}/>
        ))}
      </div>
      {displayMovies.length === 0 ? <div className="no-movies"> No Movies to display </div>:null}
    </div>
    );
  
  }
}

export default App;
