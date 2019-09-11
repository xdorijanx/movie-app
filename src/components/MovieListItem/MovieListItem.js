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
    height: 480,
    width: 520,
    textAlign: "left",
    marginBottom: theme.spacing(10)
  },
  cardMedia: {
    height: 281,
    width: "93%",
    margin: "0 auto"
  },
  cardRoot: {
    overflow: "visible"
  },

  cardHeader: {
    position: "relative",
    left: "93%",
    zIndex: 1,
    bottom: 27,
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
      <Card className={classes.card} classes={{root: classes.cardRoot}}>
        <CardActionArea>
          <CardHeader avatar={<Avatar aria-label="recipe">{rating}</Avatar>} className={classes.cardHeader}/>
          <CardMedia
            image={`https://image.tmdb.org/t/p/w500/${image}`}
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography component={'span'}>
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
