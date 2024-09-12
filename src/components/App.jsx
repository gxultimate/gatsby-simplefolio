import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData, experienceData } from '../mock/data';

function App(props) {
  const [isDark, setDark] = useState(false);
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const setDarkMode = (v) => {
      setDark(!isDark)
      
  }

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setExperience({...experienceData});
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer ,isDark}}>
      <Hero props={props} setDark={setDarkMode} isDark={isDark}/>
      <About props={props}  isDark={isDark} />
       <Experience props={props }  isDark={isDark}/>
       <Skills props={props }  isDark={isDark}/>
      <Projects props={props}  isDark={isDark} />
      <Contact props={props}  isDark={isDark}/>
      <Footer props={props}  isDark={isDark} />
    </PortfolioProvider>
  );
}

export default App;
