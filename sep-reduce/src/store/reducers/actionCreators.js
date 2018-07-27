import * as actionTypes from './actionTypes'

export const addMovie = (movie) => {
  return {
    type: actionTypes.ADD_MOVIE,
    movie: movie
  }
}

export const incrementCounter = () => {
  return {
    type : actionTypes.INCREMENT_COUNTER
  }
}

export const populatePosts = (posts) => {
  return {
    type : actionTypes.POPULATE_POSTS,
    posts : posts
  }
}

export const populatePostsUsingThunk = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {
      dispatch({type : actionTypes.POPULATE_POSTS, posts : json})
    })
  }
}
