import React from 'react';
import './style/mystyle.css';
import "animate.css/animate.min.css";

import ScrollAnimation from 'react-animate-on-scroll';
import {  mdiGithubCircle, mdiRocket } from '@mdi/js'
import Landing from './components/Landing';
import Section from './components/Section';
import { experience, education, about } from './locales/translations';
import Projects from './components/projects/Projects';
import Main from './components/Main.js';

function App() {

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
      <Landing/>
      <Main/>
      <footer class="footer">
        <div class="content has-text-centered">
        <br/><br/><br/><br/><br/><br/>
        </div>
      </footer>
      <div id="preload">
        <img src="/img/water.jpg" />
      </div>
  </div>
  );
}

export default App;
