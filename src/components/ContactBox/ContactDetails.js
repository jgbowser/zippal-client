import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ryanProfileImg from "../../images/ryan-profile-img.jpg";
import johnProfilImg from "../../images/john-profile-img.jpg";
import phillipProfileImg from "../../images/phillip-profile-img.jpg";
import mathewProfileImg from "../../images/mathew-profile-img.jpg";

export function JohnDetails() {
  return (
    <div className="ContactDetails">
      <h4>John Bowser</h4>
      <div className="contact_img">
        <img
          alt="John Bowser sitting among large boulders in a Utah canyon"
          src={johnProfilImg}
        />
      </div>
      <p>
        <a
          href="https://github.com/jgbowser"
          target="_blank"
          rel="external noopener noreferrer"
          alt="link to John's GitHub"
        >
          <FontAwesomeIcon icon={["fab", "github"]} /> <span>Github</span>
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/john-g-bowser/"
          target="_blank"
          rel="external noopener noreferrer"
          alt="link to John's LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} /> <span>LinkedIn</span>
        </a>
      </p>
      <p className="personal_bio">
        I love learning new things. If I'm not outside exploring with my camera
        you can probably find me digging through coding tutorials, reading a
        book, or listening to my favorite tech and videogame podcasts. I love
        working on challenging projects that allow me to learn new concepts. If
        you would like to work with me or just chat hit me up on either LinkedIn
        or GitHub.
      </p>
    </div>
  );
}

export function PhillipDetails() {
  return (
    <div className="ContactDetails">
      <h4>Phillip 'Lip' Cowan</h4>
      <div className="contact_img">
        <img alt="phillip profile" src={phillipProfileImg} />
      </div>
      <p>
        <a
          href="https://github.com/lipcowan"
          target="_blank"
          rel="external noopener noreferrer"
          alt="link to Phillip's github"
        >
          <FontAwesomeIcon icon={["fab", "github"]} /> <span>Github</span>
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/lip-cowan/"
          target="_blank"
          rel="external noopener noreferrer"
          alt="link to Phillip's LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} /> <span>LinkedIn</span>
        </a>
      </p>
      <article className="personal_bio">
        <p>
          I started out as a hair stylist and salon manager then went to college
          and studied chemical engineering at UIC while completing undergraduate
          research at the University of Iowa (nanotechnology) and an internship
          at Pfizer (combination products R&D). After which I took another path
          and worked at two life changing start-ups (Uber and Opendoor) in a
          customer service capacity.
        </p>
        <p>
          I'm excited to take my various experiences and apply them to the world
          of software development, please feel free to reach out if you know of
          any opportunities or if you have any questions.
        </p>
      </article>
    </div>
  );
}

export function MathewDetails() {
  return (
    <div className="ContactDetails">
      <h4>Mathew Murray</h4>
      <div className="contact_img">
        <img src={mathewProfileImg} alt="Mathew Murray" />
      </div>
      <p>
        <a
          href="https://github.com/MathewMurray"
          target="_blank"
          rel="external noopener noreferrer"
          alt="link to Mathew's GitHub"
        >
          <FontAwesomeIcon icon={["fab", "github"]} /> <span>Github</span>
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/mathewmurray/"
          target="_blank"
          rel="external noopener noreferrer"
          alt="link to Mathew's LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} /> <span>LinkedIn</span>
        </a>
      </p>
      <p className="personal_bio">
        I'm a pretty relaxed guy, hailing from the sunny state of Florida. I
        spend my free time with my family or friends, mostly watching movies or
        playing table top games. I'm always looking for more projects and Magic
        players. Feel free to contact me!
      </p>
    </div>
  );
}

export function RyanDetails() {
  return (
    <div className="ContactDetails">
      <h4>Ryan Whitmore</h4>
      <div className="contact_img">
        <img alt="ryan profile" src={ryanProfileImg} />
      </div>
      <p>
        <a
          href="https://github.com/warptrail"
          target="_blank"
          rel="external noopener noreferrer"
          alt="link to ryans github repo"
        >
          <FontAwesomeIcon icon={["fab", "github"]} /> <span>Github</span>
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/whitmorespaceindustries/"
          target="_blank"
          rel="external noopener noreferrer"
          alt="link to Ryan's LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} /> <span>LinkedIn</span>
        </a>
      </p>
      <p className="personal_bio">
      I am a human living in the Bay Area of California and enjoying life. 
      A huge fan of Bob Ross. Also, technology, gadgets, inventions and 
      thinking about the future. Always in creative mode, whether it be coding, 
      writing music or making art.  Feel free to get in touch on 
      LinkedIn or wherever. 
    </p>
    </div>
  );
}
