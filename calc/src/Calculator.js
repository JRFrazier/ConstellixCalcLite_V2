import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";

const styles = theme => ({
  root: {
    height: 300,
    position: "fixed"
  }
});

function Calculator(props) {
  const { classes } = props;
  const { clicked } = props.clicked;

  const calc = (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>
    </div>
  );

  return <Grow in={clicked}>{calc}</Grow>;
}

Calculator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Calculator);
