import React, { Component } from 'react';
import Movie from './Movie'
import axios from 'axios'

const API_URL = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

class Content extends Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      value: '',
      singleMovie: ''
    }
  }

  fetchMovies = () => {
    let _this = this

    return axios.get(API_URL)
      .then(function(response) {
        _this.setState({ singleMovie: response.data.title })
      })
  }

  onHandleChange =(e) => {
    this.setState({value: e.currentTarget.value})
  }

  handleSubmit = () => {
    const movie = this.state.value
    //callback to parent
    this.props.incrementCounter()
    this.fetchMovies()
    this.setState ({movies: this.state.movies.concat(movie)})
  }

  render() {
    const { movies } = this.state
    console.log(this.props)
    return (
      <div>
        <h1>Add movie</h1>
        <input onChange={this.onHandleChange} placeholder="movie name"/>
        <button onClick={this.handleSubmit}>Add it</button>
        <p>Movie: {movies}</p>
        {movies.length}
        <p>SINGLE MOVIE: {this.state.singleMovie}</p>
        <ul>
          {
            movies.map ((movie, i) => {
            return <Movie key={i} movie = {movie}/>
            })
          }
        </ul>
      </div>
    )
  }
}
export default Content
