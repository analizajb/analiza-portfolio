import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4}>
          <Card className="project-card" style={{ maxWidth: "30rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/hectorromo06/purly/raw/main/purly-screenshot.png"
            />
            <Card.Body>
              <Card.Title>Purly</Card.Title>
              <Card.Text>
                Knitters from all over can relate to feeling the motivation to
                create something beautiful - but another thing they can relate
                to is not knowing where to start. Introducing Purly, a
                simplified application that renders a pattern for our users
                depending on specific inputs. Tell us your skill-level, what
                type of yarn you like to work with, even needle size! No need to
                worry about endless browsing online - everything is here for you
                already! Well, as we like to say here at Purly, "let's make
                something!".
              </Card.Text>
              <Button
                href="https://github.com/hectorromo06/purly"
                variant="outline-secondary"
              >
                Github Repository
              </Button>
              <Button
                href="https://purly.herokuapp.com/"
                variant="outline-secondary"
              >
                Live Link
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="project-card" style={{ width: "30rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/ptran77/garden-planner/raw/main/my-garden-planner.gif"
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
                access to see what other gardeners are growing. Our application
                is a simple tool for beginner gardeners to build their own
                garden and connect with those that already have!
              </Card.Text>
              <Button
                href="https://github.com/ptran77/garden-planner"
                variant="outline-secondary"
              >
                Github Repository
              </Button>
              <Button
                href="https://garden-planner-90482.herokuapp.com/"
                variant="outline-secondary"
              >
                Live Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="project-card" style={{ width: "30rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/hectorromo06/player-details-app/raw/main/assets/images/screenshot.png"
            />
            <Card.Body>
              <Card.Title>Player Details</Card.Title>
              <Card.Text>
                This site allows baseball fans to search up their favorite
                player and retrieve specific stats on them. The motivation
                behind this concept was to allow the user to retrieve quick
                results without and overload of other unnecessary information.
                As an added bonus, the user can also load YouTube videos related
                to their search. We kept in mind that our user wants a
                simplified design so we ensured the styling of the page
                reflected simplicity but also relates to the contcept of this
                site.
              </Card.Text>
              <Button
                href="https://github.com/hectorromo06/player-details-app"
                variant="outline-secondary"
              >
                Github Repository
              </Button>
              <Button
                href="https://hectorromo06.github.io/player-details-app/"
                variant="outline-secondary"
              >
                Live Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
