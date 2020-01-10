import React, { useState } from 'react';
import {  mdiHumanHandsup, mdiAccountBadgeHorizontalOutline, mdiLightbulbOnOutline, mdiSchool } from '@mdi/js'
import Icon from '@mdi/react'
import Zoom from 'react-reveal/Zoom';

function navbar(props) {

  let navClass = "navbar animated fadeIn";

  return (
    <nav class={navClass}>
      <div class="container">

        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <p class="title has-text-white large">S. Moyo</p>
          </a>
          <span class={props.active ? "navbar-burger  is-active burger" : "navbar-burger  burger"} data-target="navbarMenu" onClick={() => props.isActive(!props.active)}>
              <span></span>
              <span></span>
              <span></span>
          </span>
        </div>
        <div id="navbarMenu" class={props.active ? "navbar-menu is-active animated fadeIn" : "navbar-menu"}>
          <div class="navbar-end">
            <span class="navbar-item">
              <a class="button is-white is-outlined" href="#experience" onClick={() => props.isActive(!props.active)}>
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
                <a class="button is-white is-outlined" href="#projects" onClick={() => props.isActive(!props.active)}>
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
                <a class="button is-white is-outlined" href="#education" onClick={() => props.isActive(!props.active)}>
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
                <a class="button is-white is-outlined" href="#about" onClick={() => props.isActive(!props.active)}>
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
export default navbar;
