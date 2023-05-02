import React from "react";
import Card from "react-bootstrap/Card";
import { ImCircleRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">JD Karlsson ("KazTraZ") </span>
            my origins are from<span className="purple"> Akureyri, Iceland.</span>
            <br /> 
            <br />Today i Live and bustle around in Norway with my family.
            <br />
            <br />I am a junior forever learning wannabe developer working as a Digitizing Specialist at the moment, Father of four and active in multiple community projects ranging from parental duties in my kids activities to open source projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImCircleRight />  Problem solving and learning new things.
            </li>
            <li className="about-activity">
              <ImCircleRight />  Try to teach my kids the ins and outs of the tinkering lifestyle.
            </li>
            <li className="about-activity">
              <ImCircleRight />  Travelling and Tinkering, i love to learn how things work from small scale electronics to large scale infrastructure.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "“Sometimes life is going to hit you in the <br /> head with a brick. Don’t lose faith.”!"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
