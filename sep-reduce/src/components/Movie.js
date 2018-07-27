import React, {Component} from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../store/reducers/actionCreators'

class Movie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movie: "New Movie"
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then((json) => {
      console.log(json)
    })
  }

  render() {
    let movies = this.props.movies

    let movieItems = movies.map((movie) => {
      return (
        <li>{movie.title} - {movie.year}</li>
      )
    })

    return (
      <div className="movieList">
        <ul>
          {movieItems}
        </ul>

        <button onClick={() => this.props.addMovieHandler(this.state.movie)}>Add Movie</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies : state.movieReducer.movies,
    reviews : state.movieReducer.reviews
  }
}

export default connect(mapStateToProps)(Movie)
