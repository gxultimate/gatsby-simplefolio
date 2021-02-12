import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Button, InputGroup, FormControl, Form, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = (props) => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn } = contact;
  const { email } = props.props.data;
  console.log(email);
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="40px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <Form action="https://getform.io/f/aca17df9-28a1-4255-b2f0-a28ac549a9a4" method="POST">
              <Form.Row>
                <Col xs={4}>
                  <InputGroup className="mb-4 contact-wrapper__text" size="lg">
                    <FormControl
                      placeholder="Name"
                      aria-label="name"
                      name="name"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
                <Col xs={4}>
                  <InputGroup className="mb-4 contact-wrapper__text" size="lg">
                    <FormControl
                      placeholder="Email"
                      aria-label="email"
                      name="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
                <Col xs={4}>
                  <InputGroup className="mb-4 contact-wrapper__text" size="lg">
                    <FormControl
                      placeholder="Message"
                      aria-label="message"
                      name="message"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>

              <Button type="submit" size='lg' variant="outline-light" className="cta-btn cta-btn--resume">
                Let's Talk
              </Button>
            </Form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
