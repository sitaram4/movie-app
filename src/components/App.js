import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMoveis } from '../actions';
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
    const {favorites} = this.props.store.getState();
    const idx = favorites.indexOf(movie);

    if(idx!==-1){
      //found movie
      return true;
    }
    return false;
  }
  render(){
    const {list} = this.props.store.getState();//[] but now {list:[],favorite:[]}
    console.log('RENDER',this.props.store.getState());
    return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>
      </div>
      <div className="list">
        {list.map((movie,index) =>(
          <MovieCard 
            movie={movie}
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}
            isFavourite={this.isMovieFavorite(movie)}/>
        ))}
      </div>
    </div>
    );
  
  }
}

export default App;
