import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Icon from '@mdi/react';
import Button from '../utils/Button'
import { mdiReact, mdiDatabase, mdiWeb, mdiGithubCircle } from '@mdi/js';

function PorjectItem({ sourceLink, hostLink, title, stack }) {
  return (
    <div class="card">
      <div class="card-content">
        <p class="title has-text-white">
          {title}
        </p>
        <p class="subtitle is-small">
          {stack}
        </p>
        <div class="buttons">
          <Button text="View Website" link={hostLink} icon={mdiWeb}/>
          <Button text="View Source" link={sourceLink} icon={mdiGithubCircle}/>
        </div>
      </div>
    </div>
  );
}

export default PorjectItem;
