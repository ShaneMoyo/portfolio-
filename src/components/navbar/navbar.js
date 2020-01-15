import React, { useState } from 'react';
import {  mdiHumanHandsup, mdiAccountBadgeHorizontalOutline, mdiLightbulbOnOutline, mdiSchool } from '@mdi/js'
import Icon from '@mdi/react'
import Button from '../utils/Button';
import Hamburger from './hamburger';
import { experience, about, projects, education } from '../../locales/translations';
function Navbar() {

  const [stickyNav, setStickyNav] = useState(false);
  const toggleNav = () => setStickyNav(!stickyNav);
  return (
    <nav class="navbar animated fadeIn">
      <div class="container">
        <Hamburger handleClick={toggleNav} active={stickyNav}/>
        <div id="navbarMenu" class={stickyNav ? "navbar-menu is-active animated fadeIn" : "navbar-menu"}>
          <div class="navbar-end">
            <span class="navbar-item">
              <Button
                link="#experience"
                icon={mdiAccountBadgeHorizontalOutline}
                onClick={toggleNav}
                text={experience.title}
              />
            </span>
              <span class="navbar-item">
                <Button
                  link="#projects"
                  icon={mdiLightbulbOnOutline}
                  onClick={toggleNav}
                  text={projects.title}
                />
              </span>
              <span class="navbar-item">
                <Button
                  link="#education"
                  icon={mdiSchool}
                  onClick={toggleNav}
                  text={education.title}
                />
              </span>
              <span class="navbar-item">
                <Button
                  link="#about"
                  icon={mdiHumanHandsup}
                  onClick={toggleNav}
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
