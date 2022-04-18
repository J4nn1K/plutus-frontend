import React, { Component } from "react";
import Navbar from "./components/navbar.component";
import AssetsList from "./components/assets-list.component";
import Balance from "./components/balance.component";
import './App.css';
import { CogIcon } from "@heroicons/react/outline"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div class="px-2">
          <Balance/>
          <AssetsList/>
        </div>
      </div>
    );
  }
}
export default App;