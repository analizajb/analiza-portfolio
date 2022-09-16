import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">Projects</h1>
        <p style={{ color: "brown" }}>
          Listed are some projects I've worked on with a group of 4-6 people.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="./assets/images/garden-planner.png"
              />
              <Card.Body>
                <Card.Title>Garden Planner</Card.Title>
                <Card.Text>
                  How does your garden grow? Oh, not sure yet? Well, let's fix
                  that. Our application is dedicated to those seeking to learn
                  about gardening. Personalize your garden by adding what you're
                  growing from our plant database. After adding your plants to
                  your garden, you can access the specific needs of each of your
                  plants. Need a little motivation on what to grow? Well, that's
                  what the community is for! Once you're signed up, you have
                  access to see what other gardeners are growing. Our
                  application is a simple tool for beginner gardeners to build
                  their own garden and connect with those that already have!
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href="https://github.com/ptran77/garden-planner"
                >
                  Github Repository
                </Button>
                <br></br>
                <Button
                  variant="outline-dark"
                  href="https://garden-planner-90482.herokuapp.com/"
                >
                  Live URL
                </Button>
              </Card.Body>
            </Card>
            <br></br>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="./assets/images/purly.herokuapp.com_ (1).png"
              />
              <Card.Body>
                <Card.Title>Purly</Card.Title>
                <Card.Text>
                  Knitters from all over can relate to feeling the motivation to
                  create something beautiful - but another thing they can relate
                  to is not knowing where to start. Introducing Purly, a
                  simplified application that renders a pattern for our users
                  depending on specific inputs. Tell us your skill-level, what
                  type of yarn you like to work with, even needle size! No need
                  to worry about endless browsing online - everything is here
                  for you already! Well, as we like to say here at Purly, "let's
                  make something!".
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href="https://github.com/hectorromo06/purly"
                >
                  Github Repository
                </Button>
                <br></br>
                <Button variant="outline-dark" href="https://purly.herokuapp.com/">
                  Live URL
                </Button>
              </Card.Body>
            </Card>
            <br></br>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="./assets/images/player-details.png"
              />
              <Card.Body>
                <Card.Title>Player Details</Card.Title>
                <Card.Text>
                  This site allows baseball fans to search up their favorite
                  player and retrieve specific stats on them. The motivation
                  behind this concept was to allow the user to retrieve quick
                  results without and overload of other unnecessary information.
                  As an added bonus, the user can also load YouTube videos
                  related to their search. We kept in mind that our user wants a
                  simplified design so we ensured the styling of the page
                  reflected simplicity but also relates to the contcept of this
                  site.
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href="https://github.com/hectorromo06/player-details-app"
                >
                  Github Repository
                </Button>
                <br></br>
                <Button variant="outline-dark" href="https://hectorromo06.github.io/player-details-app/">
                  Live URL
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
