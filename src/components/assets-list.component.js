import React, { Component } from "react";
import AssetDataService from "../services/asset.service";
// import { Link } from "react-router-dom";

export default class AssetsList extends Component {
  constructor(props) {
    super(props);
    this.retrieveAssets = this.retrieveAssets.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.state = {
      assets: [],
      // currentTutorial: null,
      currentIndex: -1,
      // searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveAssets();
  }
  
  retrieveAssets() {
    AssetDataService.getAll()
      .then(response => {
        this.setState({
          assets: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveAssets();
    // this.setState({
    //   currentAsset: null,
    //   currentIndex: -1
    // });
  }
  
  render() {
    const { assets, currentIndex } = this.state;
    
    return (
        <div>
            <h1>List</h1>
            <ul>
                {assets.map((asset) =>
                    <li>{asset.name}</li>
                )}
            </ul>
            <button className="" onClick={this.refreshList}>Refresh</button>
        </div>
    );
  }
}
