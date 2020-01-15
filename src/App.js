import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/mystyle.css';
import "animate.css/animate.min.css";
import Navbar from './navbar'
import Reveal from 'react-reveal/Reveal';
import ScrollAnimation from 'react-animate-on-scroll';
import {  mdiGithubCircle, mdiRocket } from '@mdi/js'
import Icon from '@mdi/react'
import Welcome from './components/Welcome';
import Section from './components/Section';
import translations from './locales/translations';

function App() {
  const [stickyNav, setStickyNav] = useState(false);
  const [stickyNavBackground, setStickyNavBackground] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const projectsOutlet = (
    <div class="buttons is-centered">
      <a class="button is-white is-outlined" href="https://github.com/ShaneMoyo">
        <span class="icon">
          <Icon path={mdiGithubCircle}
          size={2}
          color="white"
          />
        </span>
        <br/>
        <span>Github</span>
      </a>

      <a class="button is-white is-outlined" onClick={() => setOpenProjects(!openProjects)}>
        <span class="icon">
          <Icon path={mdiRocket}
          size={2}
          color="white"
          />
        </span>
        <span>Deployed Projects</span>
      </a>
    </div>);

  return (
    <div>
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.com/libraries/kissui.scrollanim"/>
        <link href="http://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Alegreya:700" rel="stylesheet" type="text/css" />
        <title>Shane Moyo</title>
      </head>
      <section class="hero is-info is-fullheight landing">
        <div class="hero-body">
            <div class="container has-text-centered">
              <Welcome setStickyNav={setStickyNav}/>
              <br/><br/><br/><br/><br/>
            </div>
        </div>
      </section>

    <section class="hero is-fullheight main">
      <ScrollAnimation
        animateOut="fadeOut"
        animateIn="fadeIn">
        <Navbar/>
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns">
              <div class="column" >
                <Section
                  copy={translations["projects"]}
                  outlet={projectsOutlet}
                  />
                <Section copy={translations["education"]}/>
                <Section copy={translations["experience"]}/>
                <Section copy={translations["about"]}/>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  </div>
  );
}

export default App;
