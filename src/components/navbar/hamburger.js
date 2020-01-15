import React from 'react';

export default function Hamburger({active, handleClick }) {
  return(
    <div class="navbar-brand">
      <a class="navbar-item" link="../">
        <p class="title has-text-white large">S. Moyo</p>
      </a>
      <span
        class={active ? "navbar-burger  is-active burger" : "navbar-burger  burger"}
        data-target="navbarMenu" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
      </span>
    </div>
  );
}
