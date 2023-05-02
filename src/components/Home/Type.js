import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "wannabe hacker",
          "Forever learning",
          "Father of four",
          "Self proclaimed jack of all trades",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
