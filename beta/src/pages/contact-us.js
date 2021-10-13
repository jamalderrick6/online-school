import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = "service_r313tzm";
const TEMPLATE_ID = "template_14gamxx";
const USER_ID = "user_KjHfUjdbiwVSEBamJ9rlF";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  redirect = (url) => {
    window.open(url, "_blank");
  };

  render() {
    return (
      <section className="section contact">
        <div className="container">
          <div className="wrapper">
            <div className="content">
              <div className="grid left-bar">
                <span className="title">Contact Us</span>
                <p>
                  Let us know what you think about OnlineSchool, any
                  recommendations or any questions. We'd love to provide the
                  highest quality of services.
                </p>
                <div className="social-icons">
                  {/* facebook icon */}
                  <svg
                    onClick={() =>
                      this.redirect("https://www.facebook.com/kuazone")
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                  >
                    <g
                      id="facebook_hover"
                      data-name="facebook hover"
                      transform="translate(-780 -5890)"
                    >
                      <rect
                        id="Прямоугольник_2511"
                        data-name="Прямоугольник 2511"
                        width="35"
                        height="35"
                        rx="4"
                        transform="translate(780 5890)"
                        fill="#297730"
                      />
                      <g
                        id="facebook-logo-2"
                        transform="translate(-675.772 5355.617)"
                      >
                        <path
                          id="Path_1325-2"
                          data-name="Path 1325-2"
                          d="M1477.4,543.387l-2.15,0a3.777,3.777,0,0,0-3.977,4.081v1.881h-2.162a.338.338,0,0,0-.338.338v2.726a.338.338,0,0,0,.338.338h2.162v6.879a.338.338,0,0,0,.338.338h2.821a.338.338,0,0,0,.338-.338v-6.878h2.528a.338.338,0,0,0,.338-.338v-2.726a.338.338,0,0,0-.338-.338h-2.529v-1.6c0-.767.183-1.156,1.181-1.156h1.448a.338.338,0,0,0,.338-.338v-2.528a.338.338,0,0,0-.334-.341Z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>

                  {/* instagram icon */}
                  <div
                    onClick={() =>
                      this.redirect("https://www.instagram.com/kuazone/")
                    }
                    className="icon-wrap"
                  >
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="23px"
                      height="23px"
                    >
                      {" "}
                      <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid form">
                <form onSubmit={this.handleOnSubmit}>
                  <div className="label_input">
                    <label for="name">
                      <span>Enter your name</span>
                    </label>
                    <input
                      onChange={this.validateForm}
                      autoComplete="email"
                      {...this.state.email}
                      id="from_name"
                      name="from_name"
                      type="text"
                      value={this.state.name}
                      required
                      noValidate
                      placeholder="please enter your name"
                    />
                  </div>
                  <div className="separator"></div>

                  <div className="label_input">
                    <label for="email">
                      <span>Enter your email</span>
                    </label>
                    <input
                      onChange={this.validateForm}
                      autoComplete="email"
                      {...this.state.email}
                      id="from_email"
                      name="from_email"
                      type="text"
                      value={this.state.email}
                      required
                      noValidate
                      placeholder="please enter your email"
                    />
                  </div>
                  <div className="separator"></div>
                  <div className="label_input">
                    <label for="message">
                      <span>Enter your message</span>
                    </label>
                    <textarea
                      onChange={this.validateForm}
                      autoComplete="message"
                      {...this.state.email}
                      id="message"
                      name="message"
                      type="text"
                      value={this.state.message}
                      required
                      noValidate
                      placeholder="enter your message"
                    />
                  </div>
                  <div className="separator"></div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
