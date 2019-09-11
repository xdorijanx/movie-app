import React from "react";
import {
  CircularProgress,
  Button,
  IconButton,
  Typography,
  withStyles
} from "@material-ui/core";

import Shuffle from "@material-ui/icons/Shuffle";

const styles = theme => ({
  buttonContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around"
  },
  loadButton: {
    borderRadius: "50%"
  }
});

// The empty span below is used to easily position the rest of the buttons properly
const ButtonGroup = ({ classes }) => {
  return (
    <div className={classes.buttonContainer}>
      <span></span>
      <Button variant="contained" className={classes.loadButton}>Load</Button>
      <IconButton>
        <Shuffle fontSize="large" />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(ButtonGroup);
