import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/mystyle.css';
import "animate.css/animate.min.css";
import Navbar from './navbar'
import Reveal from 'react-reveal/Reveal';
import ScrollAnimation from 'react-animate-on-scroll';


function App() {
  const [stickyNav, setStickyNav] = useState(false);

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
      <div class="hero-head">
        <Navbar sticky={stickyNav}/>
      </div>
      <div class="hero-body">
          <div class="container has-text-centered">
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              afterAnimatedOut={() => setStickyNav(true)}
              afterAnimatedIn={() => setStickyNav(false)}>
              <h1 class="subtitle">Hey there, I'm</h1>
              <h2 class="title">Shane Moyo</h2>
              <h1 class="subtitle profession">A Full Stack Software Engineer</h1>
            </ScrollAnimation>
          </div>
      </div>
    </section>

    <section class="hero is-fullheight main">
      <div class="hero-body">

        <div class=" container has-text-centered">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <h1 class="subtitle">Hey there, I'm</h1>
          <h2 class="title">Shane Moyo</h2>
          <h1 class="subtitle profession">A Full Stack Software Engineer</h1>
          </ScrollAnimation>
        </div>

      </div>
    </section>

    </div>
  );
}

export default App;
