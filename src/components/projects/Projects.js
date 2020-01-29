import React, {useState} from 'react';
import { projects } from '../../locales/translations';
import Section from '../Section.js';
import ProjectItem from './ProjectItem.js';
import Button from '../utils/Button'
import { mdiReact, mdiDatabase, mdiWeb, mdiGithubCircle } from '@mdi/js';

export default function Projects() {
  const { todo, healthihost } = projects;
  return (
    <div>
      <ProjectItem item={todo}/>
      <hr/>
      <ProjectItem item={healthihost}/>
    </div>
  )
}
