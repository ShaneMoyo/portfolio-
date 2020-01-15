import React, {useState} from 'react';
import { projects } from '../../locales/translations';
import {  mdiGithubCircle, mdiRocket } from '@mdi/js'
import Button from '../utils/Button.js';

export default function ProjectOutlet() {
  const [openProjects, setOpenProjects] = useState(false);
  const { github, deployed } = projects.button;

  return (
    <div class="buttons is-centered">
      <Button
        icon={mdiGithubCircle}
        link="https://github.com/ShaneMoyo"
        text={github}
      />
      <Button
        icon={mdiRocket}
        onClick={() => setOpenProjects(!openProjects)}
        text={deployed}
      />
    </div>);
}
