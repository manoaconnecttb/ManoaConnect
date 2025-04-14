import { Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer style={{ backgroundColor: '#024731' }} className="mt-auto py-3">
    <Container>
      <Row>
        {/* Column 1: Current Information */}
        <Col style={{ backgroundColor: '#013d2e' }} className="text-center text-light py-2">
          Created by ICS Software Engineering Students at UH Manoa
          <br />
          University of Hawaii
          <br />
          Honolulu, HI 96822
          <br />
        </Col>

        {/* Column 2: Legal Information */}
        <Col style={{ backgroundColor: '#013d2e' }} className="text-center text-light py-2">
          <h5>Legal</h5>
          <a href="#copyright" className="text-light">Copyright</a>
          <br />
          <a href="#cookies" className="text-light">Cookies</a>
          <br />
          <a href="#privacy-policy" className="text-light">Privacy Policy</a>
        </Col>

        {/* Column 3: Customer Support */}
        <Col style={{ backgroundColor: '#013d2e' }} className="text-center text-light py-2">
          <h5>Customer Support</h5>
          <a href="#faq" className="text-light">FAQ</a>
          <br />
          <a href="#contact-us" className="text-light">Contact Us</a>
          <br />
          <a href="mailto:support@example.com" className="text-light">manoacon@hawaii.edu</a>
        </Col>

        {/* Column 4: Social Media Links */}
        <Col style={{ backgroundColor: '#013d2e' }} className="text-center text-light py-2">
          <h5>Follow Us</h5>
          <a href="#facebook" className="text-light me-2">Facebook</a>
          <a href="#twitter" className="text-light me-2">Twitter</a>
          <a href="#instagram" className="text-light me-2">Instagram</a>
          <a href="#linkedin" className="text-light">LinkedIn</a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
