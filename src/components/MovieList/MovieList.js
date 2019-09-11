import React from "react";
import MovieListItem from "../MovieListItem/MovieListItem";
import Grid from "@material-ui/core/Grid/";
import { withStyles }  from "@material-ui/core/"
const styles = theme => ({
  container: {
    overflow: "hidden"
  }
})
const MovieList = ({ data , classes}) => {
  return (
    <div>
      <Grid container justify="space-around" className={classes.container}>
        {data ? (
          data.map((movie, i) => (
            <Grid key={movie.original_title + i} item xs={12} md={6} lg={4}>
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

export default withStyles(styles)(MovieList);
