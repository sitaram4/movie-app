import React, { Component } from 'react';
// import { StoreContext } from '..';
import {connect} from 'react-redux'


// import {data } from '../data'
import {handleMovieSearch,addMovieToList} from '../actions'
class Navbar extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      
      searchText:''
    }
    this.handleSearch = this.handleSearch.bind(this);
    // console.log('propr',props);
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
    // const { showSearchResults } = this.state;
    const {result,showSearchResults} = this.props.search;
    return (
        <div className="nav">
          <div className="search-container">
              <input onChange={this.handleChange}/>
              <button id="search-btn" onClick={this.handleSearch}>Search</button>
              {showSearchResults && 
              <div className="search-results">
                <div className="search-result">
                  <img src={result.Poster} alt = "search-pic" />
                  <div className="movie-info">
                    <span>{result.Title}</span>
                    <button onClick = {() => this.handleAddToMovies(result)}>
                      Add To Movies
                    </button>
                  </div>
                </div>

              </div>
              }
          </div>
        </div>
      );
  }
}
// class NavbarWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext>
//         {(store) => <Navbar dispatch={store.dispatch} search = {this.props.search}></Navbar>}
//       </StoreContext>
//     )
//   }
// }
function mapStateToProps({search}){
  return {
    search,
  }
}
export default connect(mapStateToProps)(Navbar);
