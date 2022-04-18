import React, { Component } from "react";
import "../App.css";
import { MenuAlt2Icon, CogIcon } from "@heroicons/react/outline"

export default class Navbar extends Component {
  render() {
    return (
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <MenuAlt2Icon class="h-5 w-5"/>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Portfolio</a></li>
              {/* <li><a>About</a></li> */}
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost normal-case text-xl">Plutus</a>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <CogIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }
}

