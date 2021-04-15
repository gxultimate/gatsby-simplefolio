import React, { useContext, useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = ({props ,setDark,isDark}) => {

  const { hero } = useContext(PortfolioContext);
 
  const { title, subtitle, cta } = hero;
  const { name, job } = props.data;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);



  return (
    <section id={isDark ? 'hero-dark' : 'hero'} className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="100px">
          <h1 className="hero-title">
            {title || 'Hi, my name is '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {job || "I'm the Unknown Developer."}
            <img
              onClick={setDark}
              src={!isDark?"https://media.giphy.com/media/h8xE5ALopE7a9nGVIu/giphy.gif":"https://media.giphy.com/media/eGmgF0V90QIgpMv4WQ/giphy.gif"}
              style={{ width: '7rem', height: '6rem', marginLeft: '2rem' }}
              alt="loading..."
            />
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="100px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
