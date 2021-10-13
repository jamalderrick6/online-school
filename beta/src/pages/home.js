import React from "react";
import BackgroundSlider from "react-background-slider";

import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="section home">
        <BackgroundSlider
          className="background-slides"
          images={[
            "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1561494653-744c43aed0c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          ]}
          duration={10}
          transition={2}
        />
        <div className="container">
          <div className="wrapper">
            <div className="content">
              <span className="description">
                With OnlineSchool, we believe anybody with a passion for
                technology can learn and adapt. The technological world is huge
                with a huge of opportunities. We offer courses to fulfill your
                passion and teach you programming languages, other technological
                stacks to succeed and make it into the ever growing tech
                industry.
              </span>
              <Link to="/courses">View our Courses</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
