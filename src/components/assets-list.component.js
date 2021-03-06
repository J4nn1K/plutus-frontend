import React, { Component } from "react";
import AssetDataService from "../services/asset.service";
import "../App.css";
import { RefreshIcon, PlusIcon, DotsVerticalIcon } from "@heroicons/react/outline"

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
        <p class="text-xl font-medium pt-6">Assets</p>
        <ul>
          {assets.map((asset) =>
            <div className="mb-4 p-4 max-w-sm mx-auto bg-base-100 rounded-xl shadow-lg flex items-center space-x-4">
              <div>
                <img src={process.env.PUBLIC_URL + 'img/' + asset.name + '.svg'} className="h-10 w-10" />
              </div>
              <div class="flex-1">
                <div class="flex flex-row items-end">
                  <p class="font-medium">{asset.name}</p>
                  <p class="text-slate-500 px-2">{asset.identification}</p>
                </div>
                <p className="text-sm text-slate-500">{asset.amount}</p>
              </div>
              <div>
                <p className="font-medium">1.234,56€</p>
                <p className="text-sm text-slate-500">6.543,21€</p>
              </div>
              <div>
                <a href="#add-asset"><DotsVerticalIcon className="h-6 w-6" /></a>
              </div>
            </div>
          )}
        </ul>

        <button onClick={this.refreshList} class="btn btn-circle"><RefreshIcon className="h-6 w-6" /></button>

        <a href="#add-asset" class="btn btn-circle"><PlusIcon className="h-6 w-6" /></a>

        {/* CREATE ASSET MODAL */}
        <div class="form-control w-full max-w-xs">
          <div class="modal" id="add-asset">
            <div class="modal-box">
              <h2 class="font-bold text-lg">Add Asset</h2>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Asset Name</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"></input>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>
                <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs"></input>
              </div>
              <select class="select select-bordered w-full max-w-xs mt-3">
                <option disabled selected>Select Identification</option>
                <option>ISIN</option>
                <option>Cryptocurrency Symbol</option>
              </select>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">ISIN</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"></input>
              </div>
              <div class="modal-action">
                <a href="#" class="btn btn-outline">Cancel</a>
                <a href="#" class="btn">Save</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
