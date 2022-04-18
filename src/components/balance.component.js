import React, { Component } from "react";
import "../App.css";

export default class Balance extends Component {
  render() {
    return (
      <div class="stats bg-primary text-primary-content max-w-sm mx-auto shadow-lg flex">
        <div class="stat">
          <div class="stat-title">Balance</div>
          <div class="stat-value">1.423,22€</div>
          <div class="stat-actions">
            <button class="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>
      </div>
    );
  }
}   