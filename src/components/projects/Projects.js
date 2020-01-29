import React, {useState} from 'react';
import { projects } from '../../locales/translations';
import Section from '../Section.js';
import ProjectOutlet from './ProjectOutlets.js';
import Button from '../utils/Button'
import { mdiReact, mdiDatabase, mdiWeb, mdiGithubCircle } from '@mdi/js';

export default function Projects() {
  return (
    <div>
    <div class="card">
      <div class="card-content">
        <p class="title has-text-white">
          Full Stack Todo
        </p>
        <p class="subtitle is-small">
          MongoDB Express React Redux Node
        </p>
        <div class="buttons">
        <Button text="View Website" link={'https://shanestodolist.herokuapp.com/'} icon={mdiWeb}/>
        <Button text="View Source" link={'https://github.com/ShaneMoyo/todo-list-clien-react'} icon={mdiGithubCircle}/>
          </div>
      </div>
      <hr/>
    </div>
    <div class="card">
      <div class="card-content">
        <p class="title has-text-white">
          Healthihost
        </p>
        <p class="subtitle is-small">
          MongoDB Express React Redux Node
        </p>
        <div class="buttons">
          <Button text="View website" link={'https://healthihost-qa.herokuapp.com/'} icon={mdiWeb}/>
          <Button text="View website" link={'https://github.com/ShaneMoyo/health-i-host'} icon={mdiWeb}/>
          </div>
      </div>
    </div>
    </div>
  )
}
