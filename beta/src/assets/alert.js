import React from "react";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

class AlertComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Snackbar
        open={this.props.alert}
        autoHideDuration={6000}
        onClose={this.props.handleClose}
        className="Alert"
      >
        <Alert severity={this.props.alert_type} variant="filled">
          {this.props.message}
        </Alert>
      </Snackbar>
    );
  }
}

export default AlertComponent;
