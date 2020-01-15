import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from './Section';
import Projects from './projects/Projects';
import Navbar from './navbar/navbar'
import { experience, education, about } from '../locales/translations';

export default function Main() {
  return(
    <section class="hero is-fullheight main">
      <ScrollAnimation
        animateOut="fadeOut"
        animateIn="fadeIn">
        <Navbar/>
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns">
              <div class="column" >
                <Projects/>
                <Section copy={education}/>
                <Section copy={experience}/>
                <Section copy={about}/>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
