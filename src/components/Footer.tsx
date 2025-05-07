import { Col, Container, Row } from 'react-bootstrap';
import { Linkedin, Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer style={{ backgroundColor: '#024731' }} className="mt-auto py-3">
    <Container>
      <Row>
        {/* Column 1: Project Info */}
        <Col style={{ backgroundColor: '#013d2e' }} className="text-center text-light py-2">
          Created by ICS Software Engineering Students at UH Manoa
          <br />
          University of Hawaii
          <br />
          Honolulu, HI 96822
        </Col>

        {/* Column 2: Technical Contact */}
        <Col style={{ backgroundColor: '#013d2e' }} className="text-center text-light py-2">
          <h5>Technical Contact</h5>
          For technical help, please contact:
          <br />
          <a
            href="https://www.linkedin.com/in/michaelpeterson80804/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            Michael Peterson
          </a>
        </Col>

        {/* Column 3: Team LinkedIn Profiles (2 sub-columns) */}
        <Col style={{ backgroundColor: '#013d2e' }} className="text-center text-light py-2">
          <h5>Team Members</h5>
          <Row>
            <Col>
              <a
                href="https://www.linkedin.com/in/mateo-maramara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light d-block"
              >
                Mateo Maramara
              </a>
              <a
                href="https://www.linkedin.com/in/zhongyu-zhang-0091a5345/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light d-block"
              >
                Zhongyu Zhang
              </a>
              <a
                href="https://ruichen12.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light d-block"
              >
                Rui Chen
              </a>
            </Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/laurent-keith-villanueva/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light d-block"
              >
                Keith Villanueva
              </a>
              <a
                href="https://www.linkedin.com/in/andre-miller-62905b326/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light d-block"
              >
                Andre Miler
              </a>
              <a
                href="https://www.linkedin.com/in/michaelpeterson80804/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light d-block"
              >
                Michael Peterson
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
