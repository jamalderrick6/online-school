import React from "react";
import { Link } from "react-router-dom";

class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { course_viewed } = this.props;
    console.log(course_viewed);
    return (
      <div className="course__details">
        <div className="content">
          <span className="heading">{`${course_viewed.name} details`}</span>
          <span className="summary">
            More details will be available in Interactive version. Coming Soon!{" "}
            <br />
            Although services are provided, if you want to enlist for this
            course. Click the button below to contact us.
          </span>
          <Link to="/contact-us" className="enroll">
            Contact Us
          </Link>
        </div>
      </div>
    );
  }
}

export default CourseDetail;
