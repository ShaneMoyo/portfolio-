import React from 'react';
import Icon from '@mdi/react';

export default function Button({ link, icon, text, onClick }) {
  return (
    <a class="button is-white is-outlined" href={link} onClick={onClick}>
      <span class="icon">
        <Icon path={icon}
        size={2}
        color="white"
        />
      </span>
      <span>{text}</span>
    </a>
  )
}
