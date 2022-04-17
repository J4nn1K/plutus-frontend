import React, { Component } from "react";
import AssetDataService from "../services/asset.service";
import '../App.css';

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
        <ul>
          {assets.map((asset) =>
            <div className="bg-gray-200 rounded-xl px-3 py-2">
              <p className="text-sm font-medium text-gray-900">{asset.name}</p>
              <p className="text-sm font-medium text-gray-900">{asset.amount}</p>
            </div>
          )}
        </ul>
        <button className="bg-gray-500 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={this.refreshList}>Refresh</button>
      </div>
    );
  }
}
