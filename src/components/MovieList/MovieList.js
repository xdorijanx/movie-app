import React from "react";
import MovieListItem from "../MovieListItem/MovieListItem";
import Grid from "@material-ui/core/Grid/";
const MovieList = ({ data }) => {
  return (
    <div>
      <Grid container justify="space-around" alignContent="center" spacing={10}>
        {data ? (
          data.map((movie, i) => (
            <Grid key={movie.original_title + i} item>
              <MovieListItem
                name={movie.original_title}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
                language={movie.original_language}
                image={movie.backdrop_path}
              />
            </Grid>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Grid>
    </div>
  );
};

export default MovieList;
