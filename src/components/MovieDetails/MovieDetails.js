import React from "react";
import {
  Paper,
  Typography,
  Box,
  Tooltip,
  withStyles,
  CardMedia
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import humanizeList from "humanize-list";
const styles = theme => ({
  paper: {
    width: "100%",
    height: "100%"
  }
});

const MovieDetails = ({ classes, movieDetails }) => {
  console.log(movieDetails, "movieDetails");
  return (
    <div>
      {movieDetails !== null ? (
        <Paper>
          <div>
            <Typography variant="h1">
              Movie Name: {movieDetails.name}
            </Typography>
            <CardMedia
              image={`https://image.tmdb.org/t/p/original/${movieDetails.image}`}
              style={{ height: "60vh", width: "95vw" }}
            />
          </div>
          <div>
            <Typography>Rating:{movieDetails.rating}</Typography>
            <Rating
              name="hover-tooltip"
              max={10}
              value={movieDetails.rating}
              precision={0.5}
            />
          </div>
          <div>
            <Typography>
              Production Companies:{" "}
              {humanizeList(movieDetails.productionCompanies.map(company => {
                return company.name;
              }))}
            </Typography>
          </div>
        </Paper>
      ) : (
        <Typography>No data available</Typography>
      )}
    </div>
  );
};

export default withStyles(styles)(MovieDetails);
