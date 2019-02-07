import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({});

class CalcButton extends Component {
  handleChange = () => {
    this.props.click();
  };
  render() {
    const { classes } = this.props;
    return (
      <Fab
        color="primary"
        aria-label="Add"
        onClick={this.handleChange}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    );
  }
}

CalcButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalcButton);
