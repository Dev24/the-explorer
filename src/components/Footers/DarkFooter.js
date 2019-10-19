/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.theexplorers.com"
                target="_blank"
              >
                THE EXPLORERS
              </a>
            </li>
            <li>
              <a
                href="http://www.theexplorers.com/about"
                target="_blank"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.theexplorers.com"
            target="_blank"
          >
            THE EXPLORERS
          </a>
          . Credit to {" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Creative Tim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
