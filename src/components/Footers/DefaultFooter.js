/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  THE EXPLORERS
                </a>
              </li>
              <li>
                <a
                  href="http://presentation.creative-tim.com?ref=nukr-default-footer"
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
            . Credit to{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
            >
              Creative Tim
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
