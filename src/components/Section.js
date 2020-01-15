import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function section({outlet, copy: { title, body }}) {
  return (
    <div class="container" id={title.toLowerCase()}>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        duration={1}>
        <br/><br/><br/>
        <div class="box black is-outlined has-text-white" >
          <h1 class="title">{title}</h1>
          <h1 class="subtitle">{body}</h1>
          {outlet}
        </div>
      </ScrollAnimation>
    </div>

  );
}

export default section;
