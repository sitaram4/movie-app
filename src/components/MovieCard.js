import React from 'react';
import { addFavorite } from '../actions';
class MovieCard extends React.Component {
    handleFavouriteClick =() =>{
        const {movie} = this.props
        this.props.dispatch(addFavorite(movie));
    }
    handleUnFavouriteClick =() =>{
        const {movie} = this.props
        this.props.dispatch(addFavorite(movie));
    }
  render(){
      const {movie,isFavourite} = this.props;
    return (
        <div className="movie-card">
            <div className="left">
                <img alt="movie-poster" src={movie.Poster} />
            </div>
            <div className="right">
                <div className="title">{movie.title}</div>
                <div className="plot">{movie.Plot}</div>
                <div className="footer">
                    <div className="rating">{movie.imdbRating}</div>
                    {
                        isFavourite?
                        <button className="unfavorite-btn" onClick={this.handleUnFavouriteClick}>UnFavorite</button>:
                        <button className="favorite-btn" onClick={this.handleFavouriteClick}>Favorite</button>

                    }
                </div>
            </div>
        </div>
      );
  }
}

export default MovieCard;
