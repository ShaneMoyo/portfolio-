import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from './Section';
import Projects from './projects/Projects';
import Navbar from './navbar/navbar'
import { experience, education, about, projects } from '../locales/translations';

export default function Main() {
  return(
    <section class="hero is-fullheight main">
      <ScrollAnimation
        animateOut="fadeOut"
        animateIn="fadeIn">
        <Navbar/>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column" >
                <Section title={about.title} body={about.body}/>
                <Section title={experience.title} body={experience.body.crowdcompass.title} bullets={experience.body.crowdcompass.body}/>
                <Section title={education.title} body={education.body.title} bullets={education.body.body}/>
                <Section title={projects.title}  outlet={<Projects/>}/>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
