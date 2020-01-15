import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function section(props) {
  return (
    <div class="container" id={props.copy.title.toLowerCase()}>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        duration={1}>
        <br/><br/><br/>
        <div class="box black is-outlined has-text-white" >
          <h1 class="title">{props.copy.title}</h1>
          <h1 class="subtitle">{props.copy.body}</h1>
          {props.outlet}
        </div>
      </ScrollAnimation>
    </div>

  );
}

export default section;
