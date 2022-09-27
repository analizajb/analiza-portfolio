import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section>
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h2
                style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                className="about-header"
              >
                A little background about me...
              </h2>
            </Col>
          </Row>
          <Container className="about-me-section">
            <p
              className="about-me"
              style={{ fontSize: "1.35em", paddingBottom: "20px" }}
            >
              As a child, I've always had an intense interest for technology;
              whether it was learning the ins and outs of a computers file
              system or messing with the camera settings on my Dad's video
              camera. Then, as a young teen I first encountered coding when
              vamping up my MySpace profile (if you know, you know) but as time
              went on, I slowly pulled away. Last year, my son's teacher
              encouraged his students to learn coding. In the process of
              ensuring my son participated in the coding apps provided, that old
              love I had for learning technology was fiercely reignited.
              <br></br>
              <br></br>
              Soon enough, I took a giant leap and enrolled for the Full Stack
              Coding bootcamp through UC Davis. Today, I find myself graduated.
              Certified. Full Stack! I could write that "I can't believe I did
              it..." - but I truly can! I refuse to let that imposter syndrome
              consume me. It's because of that curious little girl rooted in my
              being that made this possible and so, here I am with all these
              tools I've become familiar with and skills I'm ready to show. I
              have proficient capabilities in HTML, CSS, JavaScript, Node,
              Express, React, SQL, Figma and so many more.
              <br></br>
              <br></br>
              Now, computers and coding aside, I have a strong passion for
              growing the majority of our produce and currently loving the
              bounty of tomatoes I have going. I'm an avid crafter and if you
              give me the slightest impression you do too, I will probably talk
              your ear off. Knitting, sewing, crocheting are my absolute
              favorite crafts. These two passions sparked the idea behind two
              group projects I completed that you can find on my Projects page!
              <br></br>
              <br></br>
              Email:
              <a href="analizaboehning@gmail.com">
                <strong> analizaboehning@gmail.com</strong>
              </a>
            </p>
          </Container>
        </Container>
      </Container>
    </section>
  );
}

export default About;
