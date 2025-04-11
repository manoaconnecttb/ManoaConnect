import { Col, Container, Row } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer style={{ backgroundColor: '#024731', color: 'white' }} className="mt-auto py-3">
    <Container>
      <Row>
        <Col
          className="text-center"
          style={{ backgroundColor: '#013924', padding: '10px', borderRadius: '5px' }}
        >
          Created by UH Manoa Software Engineering Students
          <br />
          University of Hawaii
          <br />
          Honolulu, HI 96822
          <br />
        </Col>
        <Col
          className="text-center"
          style={{ backgroundColor: '#013924', padding: '10px', borderRadius: '5px' }}
        >
          <strong>Customer Support</strong>
          <br />
          <a href="#faq" style={{ color: 'white', textDecoration: 'underline' }}>FAQ</a>
          <br />
          <a href="#contact-us" style={{ color: 'white', textDecoration: 'underline' }}>Contact Us</a>
          <br />
          <a href="#help-center" style={{ color: 'white', textDecoration: 'underline' }}>Help Center</a>
        </Col>
        <Col
          className="text-center"
          style={{ backgroundColor: '#013924', padding: '10px', borderRadius: '5px' }}
        >
          <strong>Legal</strong>
          <br />
          <a href="#terms-of-service" style={{ color: 'white', textDecoration: 'underline' }}>Terms of Service</a>
          <br />
          <a href="#privacy-policy" style={{ color: 'white', textDecoration: 'underline' }}>Privacy Policy</a>
          <br />
          <a href="#cookie-policy" style={{ color: 'white', textDecoration: 'underline' }}>Cookie Policy</a>
        </Col>
        <Col
          className="text-center"
          style={{ backgroundColor: '#013924', padding: '10px', borderRadius: '5px' }}
        >
          <strong>Follow Us</strong>
          <br />
          <Facebook style={{ margin: '0 10px', cursor: 'pointer' }} />
          <Twitter style={{ margin: '0 10px', cursor: 'pointer' }} />
          <Instagram style={{ margin: '0 10px', cursor: 'pointer' }} />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
