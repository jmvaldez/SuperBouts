import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/boxers/boxer-demo.jpg";
// import team2 from "assets/img/faces/christian.jpg";
// import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
    classes.imgRounded
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Fighters</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={10} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Fighter TBA
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  dignissim ornare venenatis. Aenean consectetur sollicitudin
                  orci nec imperdiet. Nulla rhoncus orci id{" "}
                  <a href="#pablo"> links </a>consequat efficitur. Ut eros elit,
                  tristique sed sapien eu, aliquam tempus mauris. Mauris ac est
                  ex. Mauris nec imperdiet tellus.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={10} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Fighter TBA
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  dignissim ornare venenatis. Aenean consectetur sollicitudin
                  orci nec imperdiet. Nulla rhoncus orci id{" "}
                  <a href="#pablo"> links </a>consequat efficitur. Ut eros elit,
                  tristique sed sapien eu, aliquam tempus mauris. Mauris ac est
                  ex. Mauris nec imperdiet tellus.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={10} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Fighter TBA
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  dignissim ornare venenatis. Aenean consectetur sollicitudin
                  orci nec imperdiet. Nulla rhoncus orci id{" "}
                  <a href="#pablo"> links </a>consequat efficitur. Ut eros elit,
                  tristique sed sapien eu, aliquam tempus mauris. Mauris ac est
                  ex. Mauris nec imperdiet tellus.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
