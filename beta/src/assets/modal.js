import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { X } from "react-feather";

const styles = (theme) => ({
  root: {
    margin: 0,
    borderBottom: "solid 1px #eae9ef",
    fontFamily: "lobstr",
  },
  header: {
    display: "flex",
    padding: "0 48px",
    alignItems: "center",
    justifyContent: "space-between",
    height: 78,
    fontSize: 24,
    fontWeight: "bold",
  },
  closeButton: {
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <div className={classes.header}>
        <span>{children}</span>
        {onClose ? (
          <X
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          />
        ) : null}
      </div>
    </MuiDialogTitle>
  );
});

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Dialog
          maxWidth="900"
          onClose={this.props.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.modal_state}
        >
          {"title" in this.props ? (
            <DialogTitle
              id="customized-dialog-title"
              onClose={this.props.handleClose}
            >
              {this.props.title}
            </DialogTitle>
          ) : (
            ""
          )}
          <div>{this.props.component}</div>
        </Dialog>
      </div>
    );
  }
}

export default ModalComponent;
