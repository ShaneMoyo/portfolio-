import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function welcome(props) {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
      afterAnimatedIn={() => props.setStickyNav(false)}
      afterAnimatedOut={() => props.setStickyNav(true)}
      duration={1}>
      <h1 class="subtitle">Hey there, I'm</h1>
      <h2 class="title">Shane Moyo</h2>
      <h1 class="subtitle profession">A Full Stack Software Engineer</h1>
    </ScrollAnimation>
  );
}

export default welcome;
