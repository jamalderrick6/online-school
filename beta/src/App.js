import React from "react";
import Navigation from "./components/navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PageRenderer from "./page-renderer";
import CourseDetail from "./components/course_details";
import AlertComponent from "./assets/alert";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: true,
      open: false,
      profile: {},
    };
  }

  toAuth = () => {
    console.log("I just got clicked");
    this.setState({ open: true });
  };

  handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ alert: false });
  };

  render() {
    return (
      <>
        <AlertComponent
          alert={this.state.alert}
          alert_type="info"
          message="Interaction version to be available soon. Contact us to stay updated"
          handleClose={this.handleClose}
        />

        <Router>
          <div className="App">
            <Navigation profile={this.state.profile} openAuth={this.toAuth} />
            <Switch>
              <Route exact path="/:page" component={PageRenderer} />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route exact path="/courses/:id/:name" component={CourseDetail} />
              <Route component={() => 404} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
