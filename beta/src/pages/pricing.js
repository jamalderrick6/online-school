import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import prices from "../assets/samples/prices_sample";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
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

const tiers = [
  {
    title: "Basic",
    age: "8 - 9 years",
    price: "5500",
    description: ["8 lessons per month", "2 each, 1 hour per week"],
    buttonText: "Enroll Now",
    buttonVariant: "outlined",
  },
  {
    title: "Intermediate",
    age: "10 - 12 years",
    subheader: "Most popular",
    price: "6000",
    description: ["8 lessons per month", "2 each, 1 hour per week"],
    buttonText: "Enroll Now",
    buttonVariant: "contained",
  },
  {
    title: "Premium",
    age: "13 - 15 years",
    price: "6500",
    description: ["8 lessons per month", "2 each, 1 hour per week"],
    buttonText: "Enroll Now",
    buttonVariant: "outlined",
  },
  {
    title: "Ultimate",
    age: "13 - 15 years",
    price: "7000",
    description: ["8 lessons per month", "2 each, 1 hour per week"],
    buttonText: "Enroll Now",
    buttonVariant: "outlined",
  },
];

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <section className="section pricing">
        <div className="container">
          <div className="wrapper">
            <div className="content">
              <span className="title">View our Pricing</span>
              <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                  <Grid
                    container
                    justifyContent="center"
                    spacing={6}
                    className={classes.minGrid}
                  >
                    {prices.map((price, index) => {
                      return (
                        <div className="price_container">
                          <header>
                            <span className="title">{price.name}</span>
                            <span className="age">{price.range}</span>
                          </header>
                          <div className="description">
                            <span className="price">
                              Kshs.
                              <span> {price.amount}</span>
                            </span>
                            <ul className="features">
                              {price.features.map((feature, index) => {
                                return <li>{feature}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(useStyles)(Pricing);
