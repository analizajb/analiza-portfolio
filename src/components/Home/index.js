import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/myAvatar.svg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to my page...
              </h1>

              <h1 className="heading-name">
                I'm Analiza!
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={myImg}
                alt="avatar"
                className="img-fluid"
                style={{ maxHeight: "250px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
