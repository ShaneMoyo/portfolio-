import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Icon from '@mdi/react';
import Button from '../utils/Button'
import { mdiReact, mdiDatabase, mdiWeb } from '@mdi/js';

function PorjectItem({link, copy: {title, subtitle} }) {
  return (
    <div class="container animated fadeIn">
      <div class="box black is-outlined has-text-white" >
        <h1 class="title">{title}</h1>
        <h1 class="subtitle">{subtitle}</h1>

        <span class="icon is-pulled-left">
          <Icon path={mdiReact}
          size={4}
          color="white"
          />
        </span>
        <h1 class="subtitle">React.js</h1>

        <span class="icon is-pulled-left">
          <Icon path={mdiDatabase}
          size={4}
          color="white"
          />
        </span>
        <h1 class="subtitle">MongoDB</h1>
        <Button text="View website" link={link} icon={mdiWeb}/>

      </div>
      <br/>
    </div>
  );
}

export default PorjectItem;
