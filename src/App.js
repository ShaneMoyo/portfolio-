import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/mystyle.css';
import {  mdiHumanHandsup } from '@mdi/js'
import Icon from '@mdi/react'

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
    <section class="hero is-info is-fullheight landing">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">

            <div class="navbar-brand">
              <a class="navbar-item" href="../">
                <p class="title large">S. Moyo</p>
              </a>
              <span class="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
              </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
              <div class="navbar-end">
                <span class="navbar-item">
                  <a class="button is-white is-outlined" href="#">
                  <span class="icon is-large is-pulled-left" >
                    <Icon path={mdiHumanHandsup}
                    size={2}
                    color="white"
                    />
                    </span>
                    <span>Home</span>
                  </a>
                </span>
                  <span class="navbar-item">
                    <a class="button is-white is-outlined" href="#">
                      <span class="icon">
                        <Icon path={mdiHumanHandsup}
                          size={2}
                          color="white"
                        />
                      </span>
                      <span>Examples</span>
                    </a>
                  </span>
                  <span class="navbar-item">
                    <a class="button is-white is-outlined" href="#">
                      <span class="icon">
                        <Icon path={mdiHumanHandsup}
                          size={2}
                          color="white"
                        />
                      </span>
                      <span>Documentation</span>
                    </a>
                  </span>
                  <span class="navbar-item">
                    <a class="button is-white is-outlined" href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/landing.html">
                      <span class="icon">
                        <i class="fa fa-github"></i>
                      </span>
                      <span>View Source</span>
                    </a>
                  </span>
                </div>
              </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="animated fadeIn container has-text-centered">
          <h1 class="subtitle">Hey there, I'm</h1>
          <h2 class="title">Shane Moyo</h2>
          <h1 class="subtitle profession">A Full Stack Software Engineer</h1>
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;
