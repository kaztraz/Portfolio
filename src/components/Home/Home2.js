import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/jdk_.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A father of four, working within the field of digitzation using my spare time to learn programming and fell in love, have since tried to at least learn
              something, I think… 🤷‍♂️
              <br />
              <br />I am quite ok in all the noob stuff like
              <i>
                <b className="purple"> HTML, CSS, JS</b> and even some <b className="purple">React, C, C++ and Python</b>.
              </i>
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple">Web Applications</b> and eager to learn more about {" "}
                <b className="purple">Deep Learning and Natural Launguage Processing to name a few</b>.
              </i>
              <br />
              <br />
              Whenever i find free time, I also apply my passion for devoloping with enchancing my skills in SecOps
              with <b className="purple">TryhackMe</b> and
              <i>
                <b className="purple">
                  {" "}
                  HackTheBox
                </b>
                .
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Socials</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kaztraz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/kaztraz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jdkarlsson/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kaztraz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
