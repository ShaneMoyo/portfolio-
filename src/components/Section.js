import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Icon from '@mdi/react';
import Button from './utils/Button'

import { mdiEmail, mdiInstagram, mdiLinkedinBox, mdiGithubCircle } from '@mdi/js';

function section(props) {
  const { outlet, title, body, bullets, body3, button } = props
  const iconMap = {
    "Email": mdiEmail,
    "Instagram": mdiInstagram,
    "Github": mdiGithubCircle,
    "LinkedIn": mdiLinkedinBox

  };
  const listItems = bullets ? bullets.map(bullet => {
    if (typeof bullet === 'object') {
      return(
        <li class="animated fadeIn">
          <Button
            link={bullet.link}
            icon={iconMap[bullet.network]}
            text={bullet.network}
          />
        </li>);
    }
    return <li class="animated fadeIn">{bullet}</li>
  }) : null;
  return (
    <div class="container" id={title.toLowerCase()}>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        duration={1}>
        <br/><br/><br/>
        <div class="box black is-outlined has-text-white" >
          <h1 class="title big is-large">{title}</h1>
          <h1 class="subtitle">{body}</h1>
          <div class="content is-medium">
            <ul>{listItems}</ul>
          </div>
          <h1 class="subtitle">{body3}</h1>
          {outlet}
          {button ? <Button
            link={button.link}
            icon={iconMap[button.icon]}
            text={button.text}
          /> : null}
        </div>

      </ScrollAnimation>
    </div>

  );
}

export default section;
