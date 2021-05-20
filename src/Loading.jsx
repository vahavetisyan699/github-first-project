import React, { Component } from "react";


export default class Loading extends Component {
  render() {
    return (
      <>
        <div className="loadingDiv">
          <img src="loading.gif" alt="" />
        </div>
      </>
    );
  }
}
