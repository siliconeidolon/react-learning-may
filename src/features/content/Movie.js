import React from 'react'

const Movie = (props) => {
  console.log(props)
  return (
    <li>{props.movie}</li>
  )
}


export default Movie
