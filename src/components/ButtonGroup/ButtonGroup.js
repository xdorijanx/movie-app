import React from "react";
import {
  CircularProgress,
  Button,
  IconButton,
  withStyles
} from "@material-ui/core";

import Shuffle from "@material-ui/icons/ShuffleRounded";

const styles = theme => ({
  buttonContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between"
    },
  },
  loadButton: {
    borderRadius: "50%",
    height: "70px",
    position: "absolute",
    left: "50%"
  },
  circuralProgress: {
    position: "absolute",
    zIndex: 1,
    width: 70,
    height: 70,
    left: "50%"
  },

  shuffleButton: {
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    backgroundColor: theme.palette.primary.main
  }
});

// The empty span below is used to easily position the rest of the buttons properly
const ButtonGroup = ({ classes, loadMoreMovies, loading, toggleModal }) => {
  return (
    <div className={classes.buttonContainer}>
      <span></span>
      <div>
        <Button
          color="primary"
          onClick={() => loadMoreMovies()}
          variant="contained"
          className={classes.loadButton}
        >
          Load
        </Button>
        {loading && <CircularProgress color="secondary" size={70} className={classes.circuralProgress} />}
      </div>

      <IconButton onClick={() => toggleModal(true)} color="secondary" className={classes.shuffleButton} >
        <Shuffle fontSize="large" />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(ButtonGroup);
