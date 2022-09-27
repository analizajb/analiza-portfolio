import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { DiCss3, DiBootstrap } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript, IoMdSchool } from "react-icons/io";
import {
  SiGraphql,
  SiMongodb,
  SiVisualstudiocode,
  SiHeroku,
} from "react-icons/si";
import { RiHtml5Fill, RiReactjsLine } from "react-icons/ri";
import Card from "react-bootstrap/Card";

function Resume() {
  return (
    <Container>
      <div className="resume">
        <h3 className="res-heading">Resume</h3>
        <div className="resume-link py-1">
          Download my{" "}
          <a
            className="resume-download"
            href="./assets/resume/Analiza_Boehning_Resume.docx.pdf"
            download
          >
            Resume
          </a>
        </div>

        <h1 className="res-heading">Skills</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <RiHtml5Fill />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiCss3 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <IoLogoJavascript />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <RiReactjsLine />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiBootstrap />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <GrMysql />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiGraphql />
          </Col>
        </Row>

        <h1 className="res-heading">Tools</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <FiFigma />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiHeroku />
          </Col>
        </Row>
      </div>

      <div className="background">
        <h1 className="res-heading">Education</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <IoMdSchool></IoMdSchool> University of California, Davis -
                  Continuing Education
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Full Stack Coding Certificate: Aug 2022
                </Card.Subtitle>
                <Card.Link href="https://bootcamp.ucdavis.edu/coding/">
                  Program Overview
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <IoMdSchool></IoMdSchool> Solano Community College
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2020 - present
                  <br></br>
                  Major: A.S. for Transfer, Expected graduation: 2024
                </Card.Subtitle>
                <Card.Text>
                  GPA: 3.8
                  <br></br>
                  My educational goal is to transfer to UC Davis to earn my
                  Bachelors in Computer Science.
                </Card.Text>
                <Card.Link href="https://welcome.solano.edu/">
                  Solano Homepage
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <IoMdSchool></IoMdSchool> Los Rios Community College District
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Attended 2016 - 2018
                </Card.Subtitle>
                <Card.Text>
                  GPA: 3.6
                  <br></br>
                  Credit Hours: 35
                </Card.Text>
                <Card.Link href="https://losrios.edu/">
                  LRCCD Homepage
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Resume;
