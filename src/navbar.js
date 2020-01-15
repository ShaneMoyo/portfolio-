import React, { useState } from 'react';
import {  mdiHumanHandsup, mdiAccountBadgeHorizontalOutline, mdiLightbulbOnOutline, mdiSchool } from '@mdi/js'
import Icon from '@mdi/react'
import Zoom from 'react-reveal/Zoom';

function Navbar() {

  let navClass = "navbar animated fadeIn";
  const [stickyNav, setStickyNav] = useState(false);

  return (
    <nav class={navClass}>
      <div class="container">

        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <p class="title has-text-white large">S. Moyo</p>
          </a>
          <span class={stickyNav ? "navbar-burger  is-active burger" : "navbar-burger  burger"} data-target="navbarMenu" onClick={() => setStickyNav(!stickyNav)}>
              <span></span>
              <span></span>
              <span></span>
          </span>
        </div>
        <div id="navbarMenu" class={stickyNav ? "navbar-menu is-active animated fadeIn" : "navbar-menu"}>
          <div class="navbar-end">
            <span class="navbar-item">
              <a class="button is-white is-outlined" href="#experience" onClick={() => setStickyNav(!stickyNav)}>
              <span class="icon is-large is-pulled-left" >
                <Icon path={mdiAccountBadgeHorizontalOutline}
                size={2}
                color="white"
                />
                </span>
                <span>Experience</span>
              </a>
            </span>
              <span class="navbar-item">
                <a class="button is-white is-outlined" href="#projects" onClick={() => setStickyNav(!stickyNav)}>
                  <span class="icon">
                    <Icon path={mdiLightbulbOnOutline}
                      size={2}
                      color="white"
                    />
                  </span>
                  <span>Projects</span>
                </a>
              </span>
              <span class="navbar-item">
                <a class="button is-white is-outlined" href="#education" onClick={() => setStickyNav(!stickyNav)}>
                  <span class="icon">
                    <Icon path={mdiSchool}
                      size={2}
                      color="white"
                    />
                  </span>
                  <span>Education</span>
                </a>
              </span>
              <span class="navbar-item">
                <a class="button is-white is-outlined" href="#about" onClick={() => setStickyNav(!stickyNav)}>
                  <span class="icon">
                    <Icon path={mdiHumanHandsup}
                      size={2}
                      color="white"
                    />
                  </span>
                  <span>About Me</span>
                </a>
              </span>
            </div>
          </div>
      </div>
    </nav>

  );
}
export default Navbar;
