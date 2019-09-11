import React, { Fragment } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Avatar,
  Typography,
  Skeleton,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  card: {
    maxHeight: 480,
    maxWidth: 520,
    textAlign: "left",
    margin: theme.spacing(10) + "px auto", // theme spacing will add 80 to bottom margin

    [theme.breakpoints.down("lg")]: {
      maxWidth: 420
    },

    [theme.breakpoints.down("md")]: {
      maxWidth: 420
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 420
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 300
    }
  },
  cardMedia: {
    height: 220,
    width: "93%",
    margin: "0 auto",
  },
  cardRoot: {
    overflow: "visible"
  },

  cardHeader: {
    position: "relative",
    left: "91%",
    zIndex: 1,
    bottom: 36,
    [theme.breakpoints.down("xs")]: {
      left: '86%'
    }
  }
});

const MovieListItem = ({
  name,
  releaseDate,
  rating,
  language,
  image,
  classes
}) => {
  return (
    <Fragment>
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardActionArea>
          <CardHeader
            avatar={<Avatar aria-label="recipe">{rating}</Avatar>}
            className={classes.cardHeader}
          />
          <CardMedia
            image={`https://image.tmdb.org/t/p/w500/${image}`}
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography component={"span"}>
              <Box fontWeight="fontWeightBold">
                {name} ( {releaseDate.substring(0, 4)} )
              </Box>
            </Typography>

            <Typography variant="subtitle1"> Language: {language}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default withStyles(styles)(MovieListItem);
