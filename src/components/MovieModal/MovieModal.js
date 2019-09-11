import React from "react";
import {
  withStyles,
  Button,
  Modal,
  Typography,
  Card,
  Fade,
  Backdrop,
  Paper,
  Divider,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";

const styles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  paper: {
    width: "30%",
    height: "80%",
    [theme.breakpoints.down("sm")]: {
      width: 300,
      heigh: 600
    },
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "column wrap"
  },
  formContainer: {
    display: "flex",
    justifyContent:"center",
    marginTop: "20%"
  },

  rollButton: {
    marginTop: "auto"
  }
});

const MovieModal = ({ open, toggleModal, classes }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => toggleModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper} elevation={3}>
            <div className={classes.container}>
              <div>
                <Typography variant="h4">Movie Roulette</Typography>
              </div>
              <Divider />
              <div className={classes.formContainer}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1">
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                    <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="(Disabled option)"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <Button className={classes.rollButton}>Roll</Button>
            </div>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default withStyles(styles)(MovieModal);
