import React from 'react';
import {  mdiHumanHandsup } from '@mdi/js'
import Icon from '@mdi/react'
import Zoom from 'react-reveal/Zoom';

export default function navbar(props) {
  return (
    <nav class={props.sticky ? "navbar is-fixed-top animated fadeIn" : "navbar is-fixed-top animated fadeOut" }>
      <div class="container">

        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <p class="title has-text-white large">S. Moyo</p>
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

  );
}
