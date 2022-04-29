import React, { Component } from "react";
import Navbar from "./components/navbar.component";
import AssetsList from "./components/assets-list.component";
import Balance from "./components/balance.component";
import APIKeys from "./components/api-key.component";
import './App.css';
import { CogIcon } from "@heroicons/react/outline"

class App extends Component {
  render() {
    return (
      <div class="bg-base-200">
        <Navbar/>
        <div class="p-3">
          <Balance/>
          <AssetsList/>
          <APIKeys/>
        </div>
      </div>
    );
  }
}
export default App;