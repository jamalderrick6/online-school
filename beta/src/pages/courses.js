import React from "react";
import ModalComponent from "../assets/modal";
import CourseDetail from "../components/course_details";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import courses from "../assets/samples/courses_sample";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  minGrid: {
    justifyContent: "center",
    gap: 30,
    margin: 0,
  },
  paper: {
    height: 200,
    width: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",

    "&:hover": {
      opacity: 0.6,
    },
  },
  control: {
    padding: 20,
  },
  square: {
    width: "100%",
    height: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
  },
  profession: {
    fontSize: 14,
    fontWeight: 600,
    color: "#f00",
  },
  ratings: {
    opacity: 0.6,
    fontSize: 12,
  },
});

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      open: false,
      course_viewed: "",
    };
  }

  viewCourseDetail = (course) => {
    this.setState({ course_viewed: course, open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <section className="section courses">
        <div className="container">
          <div className="wrapper">
            <div className="content">
              <div className="course-bar">
                <span>{`${courses.length} results`}</span>
              </div>
              <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                  <Grid
                    container
                    justifyContent="center"
                    spacing={6}
                    className={classes.minGrid}
                  >
                    {courses.map((course, index) => {
                      return (
                        <div
                          onClick={() => this.viewCourseDetail(course)}
                          className="grid"
                        >
                          <div className="description">
                            <span className="title">{course.name}</span>
                            <span className="subtitle line-clamp">
                              {course.headline}
                            </span>
                            <span className="level">{course.level_name}</span>
                          </div>
                          <footer>
                            <button className="enroll">View Details</button>
                          </footer>
                        </div>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <ModalComponent
          modal_state={this.state.open}
          handleClose={() => this.setState({ open: false })}
          component={
            <CourseDetail
              course_viewed={this.state.course_viewed}
              closeDialog={() => this.setState({ open: false })}
              enrollUser={this.enrollUser}
            />
          }
        />
      </section>
    );
  }
}

export default withStyles(useStyles)(Courses);
