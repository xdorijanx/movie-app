import React from 'react'
import MovieListItem from '../MovieListItem/MovieListItem'
const MovieList = ({ data }) => {

    return (
        <div>
            {data ? data.map((movie,i) => (
                <MovieListItem 
                name={movie.original_title}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
                language={movie.original_language}
                image={movie.backdrop_path}

                />
            )): <h1>Loading...</h1>}
        </div>
    )
}

export default MovieList
