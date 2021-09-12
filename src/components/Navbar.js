import React, { Component } from 'react';

import {data } from '../data'
import {handleMovieSearch,addMovieToList} from '../actions'
class Navbar extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      showSearchResults:true,
      searchText:''
    }
    this.handleSearch = this.handleSearch.bind(this);
    console.log('propr',props);
  }

  handleAddToMovies = (movie) =>{
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults:false
    })
  }
  handleSearch = () =>{
    const {searchText} = this.state;
    console.log('props', this.props);
    this.props.dispatch(handleMovieSearch(searchText))

  };
  handleChange = (e) =>{
    this.setState({
      searchText:e.target.value
    })
  }
  render(){
    // const { showSearchResults, results: movie } = this.props.search;
    return (
        <div className="nav">
          <div className="search-container">
              <input onChange={this.handleChange}/>
              <button id="search-btn" onClick={this.handleSearch}>Search</button>
              {/* {showSearchResults && 
              <div className="search-results">
                <div className="search-result">
                  <img src={data[0].Poster} alt = "search-pic" />
                  <div className="movie-info">
                    <span>{data[0].Title}</span>
                    <button onClick = {() => this.handleAddToMovies(data[0])}>
                      Add To Movies
                    </button>
                  </div>
                </div>

              </div>
              } */}
          </div>
        </div>
      );
  }
}

export default Navbar;
