import React, { useState } from 'react';
import {  mdiHumanHandsup, mdiAccountBadgeHorizontalOutline, mdiLightbulbOnOutline, mdiSchool, mdiPhoneInTalk } from '@mdi/js'
import { experience, about, projects, education, contact } from '../../locales/translations';
import Button from '../utils/Button';
import Hamburger from './hamburger';
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
                  link="#me"
                  icon={mdiHumanHandsup}
                  onClick={toggleNav}
                  text={about.title}
                />
              </span>
              <span class="navbar-item">
                <Button
                  link="#contact"
                  icon={mdiPhoneInTalk}
                  onClick={toggleNav}
                  text={contact.title}
                />
              </span>
            </div>
          </div>
      </div>
    </nav>

  );
}
export default Navbar;
