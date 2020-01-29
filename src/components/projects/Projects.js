import React, {useState} from 'react';
import { projects } from '../../locales/translations';
import Section from '../Section.js';
import ProjectItem from './ProjectItem.js';
import Button from '../utils/Button'
import { mdiReact, mdiDatabase, mdiWeb, mdiGithubCircle } from '@mdi/js';

export default function Projects() {
  return (
    <div>
      <ProjectItem
        stack={"MongoDB Express React Redux Node.js"}
        hostLink={"https://shanestodolist.herokuapp.com/"}
        sourceLink={'https://github.com/ShaneMoyo/todo-list-clien-react'}
        title={'Full Stack Todo'}
      />
      <hr/>
      <ProjectItem
        stack={"MongoDB Express React Redux Node.js"}
        hostLink={"https://healthihost-qa.herokuapp.com/"}
        sourceLink={"https://github.com/ShaneMoyo/health-i-host"}
        title={'Healthihost'}
      />
    </div>
  )
}
