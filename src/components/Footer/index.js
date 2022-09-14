import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Analiza Boehning</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2022</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/analizajb"
                style={{ color: "brown" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubFill />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/analiza-boehning/"
                style={{ color: "brown" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinBoxFill />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/analizajb"
                style={{ color: "brown" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
