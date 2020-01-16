import React, {useState} from 'react';
import { projects } from '../../locales/translations';
import {  mdiGithubCircle, mdiRocket } from '@mdi/js'
import Button from '../utils/Button.js';
import ProjectItem from './ProjectItem.js';

export default function ProjectOutlet() {
  const [openProjects, setOpenProjects] = useState(false);
  const { button: {github, deployed}, todo, healthihost } = projects;

  return (
    <div>
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
      </div>
      {openProjects && <ProjectItem link="https://shanestodolist.herokuapp.com/" copy={todo}/>}
      {openProjects && <ProjectItem link="https://healthihost-qa.herokuapp.com/" copy={healthihost}/>}
    </div>
  );
}
