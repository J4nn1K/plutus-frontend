import React, { Component } from "react";
import KeyDataService from "../services/key.service";
import "../App.css";

export default class APIKeys extends Component {
  constructor(props){
    super(props);
    this.retrieveKeys = this.retrieveKeys.bind(this);
    this.state = {
      keys: []
    };
  }

  componentDidMount() {
    this.retrieveKeys();
  }

  retrieveKeys() {
    KeyDataService.getAll()
      .then(response => {
        this.setState({
          keys: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { keys } = this.state;
    return (
      <div>
        <p class="text-xl font-medium pt-6">API Keys</p>
        <ul>
          {keys.map((key) => 
            <div className="mb-4 p-4 max-w-sm mx-auto bg-base-100 rounded-xl shadow-lg space-x-4">
              <p className="font-medium">{key.name}</p>
              {/* <p className="font-medium">{key.key}</p> */}
              <input
                type="text"
                className="ml-0 input input-bordered w-full max-w-xs"
                id="key"
                required
                value={key.key}
                onChange={this.onChangeTitle}
                name="title"
              />
            
            </div>
          )}

        </ul>
      </div>
    );
  }
}   