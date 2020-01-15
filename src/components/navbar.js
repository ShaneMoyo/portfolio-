import React, { useState } from 'react';
import {  mdiHumanHandsup, mdiAccountBadgeHorizontalOutline, mdiLightbulbOnOutline, mdiSchool } from '@mdi/js'
import Icon from '@mdi/react'
import Button from './utils/Button';
import { experience, about, projects, education } from '../locales/translations';
function Navbar() {

  let navClass = "navbar animated fadeIn";
  const [stickyNav, setStickyNav] = useState(false);

  return (
    <nav class={navClass}>
      <div class="container">

        <div class="navbar-brand">
          <a class="navbar-item" link="../">
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
              <Button
                link="#experience"
                icon={mdiAccountBadgeHorizontalOutline}
                onClick={() => setStickyNav(false)}
                text={experience.title}
              />
            </span>
              <span class="navbar-item">
                <Button
                  link="#projects"
                  icon={mdiLightbulbOnOutline}
                  onClick={() => setStickyNav(false)}
                  text={projects.title}
                />
              </span>
              <span class="navbar-item">
                <Button
                  link="#education"
                  icon={mdiSchool}
                  onClick={() => setStickyNav(false)}
                  text={education.title}
                />
              </span>
              <span class="navbar-item">
                <Button
                  link="#about"
                  icon={mdiHumanHandsup}
                  onClick={() => setStickyNav(false)}
                  text={about.title}
                />
              </span>
            </div>
          </div>
      </div>
    </nav>

  );
}
export default Navbar;
