import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { landing } from '../locales/translations';


function Landing() {
  const { subtitle1, name, subtitle2 } = landing;
  return (
    <section class="hero is-info is-fullheight landing">
      <div class="hero-body">
        <div class="container has-text-centered">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={1}>
            <h1 class="subtitle">{subtitle1}</h1>
            <h2 class="title">{name}</h2>
            <h1 class="subtitle profession">{subtitle2}</h1>
          </ScrollAnimation>
          <br/><br/><br/><br/><br/>
        </div>
      </div>
    </section>
  );
}

export default Landing;
