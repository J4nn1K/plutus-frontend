import React, { Component } from "react";
import AssetsList from "./components/assets-list.component";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="p-4">
        <AssetsList/>
      </div>
    );
  }
}
export default App;