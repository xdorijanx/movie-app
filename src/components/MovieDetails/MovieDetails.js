import React from "react";
import {
  Typography,
  withStyles,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import humanizeList from "humanize-list";
const styles = theme => ({
  card: {
    paddingTop: "1vh",
    minHeight: "100vh",
    width: "95vw",
    margin: "0 auto",
    boxShadow: "none",
    textAlign: "left"
  },
  cardMedia: {
    height: "80vh",
    width: "95vw",
    [theme.breakpoints.down("md")]: {
      maxHeight: "281px",
      maxWidth: "500px",
      margin: "0 auto"
    }
  },
  rating_container: {
    display: "flex",
    alignItems: "center",
    width: "50vw",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column wrap",
      width: "100vw",
      fontSize: "x-large"
    }
  },
  movieTitle: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  }
});

const MovieDetails = ({
  classes,
  movieDetails,
  rateMovie,
  guestSessionId,
  ratedMovies
}) => {
  let value = 0;
  let userRate = null;
  if (ratedMovies && movieDetails) {
    userRate = ratedMovies.filter(
      ratedMovie => ratedMovie.id === movieDetails.id
    );
  }
  return (
    <div>
      {movieDetails !== null ? (
        <Card className={classes.card}>
          <div>
            <Typography variant="h4" gutterBottom className={classes.movieTitle}>
              {movieDetails.name}
            </Typography>
            <CardMedia
              className={classes.cardMedia}
              image={
                window.innerWidth > 1000
                  ? `https://image.tmdb.org/t/p/original/${movieDetails.image}`
                  : `https://image.tmdb.org/t/p/w500/${movieDetails.image}`
              }
            />
          </div>

          <CardContent>
            <div className={classes.rating_container}>
              <Typography>
                <strong>Popularity : </strong>
                {movieDetails.rating}
              </Typography>
              <Rating
                size="medium"
                name="hover-tooltip"
                max={10}
                value={movieDetails.rating}
                precision={0.5}
                onChangeActive={(event, newHover) => {
                  value = newHover;
                }}
                onClick={() =>
                  rateMovie(movieDetails.id, guestSessionId, value)
                }
              />
            </div>
            {userRate && userRate.length ? (
              <div className={classes.rating_container}>
                <Typography>
                  <strong>Your rating : </strong>
                  {userRate[0].rating}
                </Typography>
                <Rating
                  size="medium"
                  name="hover-tooltip"
                  max={10}
                  value={userRate[0].rating}
                  readOnly
                />
              </div>
            ) : null}

            <Typography>
              <strong>Language: </strong>
              {movieDetails.language}
            </Typography>
            <Typography>
              <strong> Production Companies:</strong>{" "}
              {humanizeList(
                movieDetails.productionCompanies.map(company => {
                  return company.name;
                })
              )}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography>No data available</Typography>
      )}
    </div>
  );
};

export default withStyles(styles)(MovieDetails);
