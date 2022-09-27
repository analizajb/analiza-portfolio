import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import myImg from "../../assets/myAvatar.svg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">Welcome!</h1>
              <Container>
                <Card border="dark" style={{ width: '50rem' }} className="home-overview">
                  <Card.Body>
                    <Card.Title>Meet Analiza...</Card.Title>
                    <Card.Text>
                    A Full Stack Developer that's committed to finding solutions
                    to complex problems with a flair for creativity and style.
                    After recently graduating from UC Davis Full Stack Coding
                    bootcamp I've acquired major skills like the usual HTML, CSS
                    and JavaScript. Frameworks I enjoy working with are React.js
                    and I've recently started to learn Typescript and Python.
                    <br></br>
                    Among my technical skills I have a passion for creativity,
                    people and being a mother. I love to see the world through
                    my children's eyes and it inspires me to create a beautiful
                    world for them. This translates into growing my own produce
                    and allowing them to be apart of the process. Kids make
                    great helpers for pulling weeds! I love to get creative by
                    sewing clothes, making my own plant support system out of
                    dried sunflower stalks in the garden and blogging my life
                    through Instagram. I enjoy connecting with people and often
                    attend library events and connect through social media to
                    always leave an opening for connection.
                    <br></br>I encourage you to click through my website to get
                    to know a little bit more about me including my professional
                    skills. Please don't hesitate to contact me through email or
                    phone as I enjoy connecting with others of all walks of
                    life.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Container>
            </Col>

            <Col md={5} className="myAvi">
              <img
                src={myImg}
                alt="avatar"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
