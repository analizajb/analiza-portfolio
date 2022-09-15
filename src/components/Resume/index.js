import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiCss3, DiBootstrap } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiGraphql,
  SiMongodb,
  SiVisualstudiocode,
  SiHeroku,
} from "react-icons/si";
import { RiHtml5Fill, RiReactjsLine } from "react-icons/ri";

function Resume() {
  return (
    <div className="resume">
      <h3>Resume</h3>
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

      <h1 className="project-heading">
        Skills
      </h1>
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

      <h1 className="project-heading">
        Tools
      </h1>
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
  );
}

export default Resume;
