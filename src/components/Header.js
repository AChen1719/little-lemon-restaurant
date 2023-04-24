import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* https://www.linkedin.com/in/mei-chen-gwu/ */}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="https://www.linkedin.com/in/mei-chen-gwu/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
               <a href="https://www.facebook.com/anniechendmv">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
               <a href="https://www.instagram.com/anniechendmv/?hl=en">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            <nav>
        <div className="logo">
          <a href="#">My Portfolio</a>
        </div>
        <ul className={showMenu ? "show" : ""}>
          <li>
            <Link to="about-section" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects-section" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contactme-section" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
          </nav>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
