import React from "react";
import {
  Paper,
  Typography,
  Box,
  Tooltip,
  withStyles,
  Card,
  CardMedia,
  CardContent,
  CardActionArea
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
  }
});

const MovieDetails = ({ classes, movieDetails,rateMovie,guestSessionId }) => {
  console.log(movieDetails, "movieDetails");
  return (
    <div>
      {movieDetails !== null ? (
        <Card className={classes.card}>
          <div>
            <Typography variant="h4" gutterBottom>{movieDetails.name}</Typography>
            <CardMedia
              image={`https://image.tmdb.org/t/p/original/${movieDetails.image}`}
              style={{ height: "80vh", width: "95vw" }}
            />
          </div>
          <CardActionArea></CardActionArea>
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
                onClick={() => rateMovie(movieDetails.id, guestSessionId, 10)}
              />
            </div>

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
