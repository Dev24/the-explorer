/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            THE EXPLORERS
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
