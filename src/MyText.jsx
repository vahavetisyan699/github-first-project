import React, { Component } from "react";

class MyText extends Component {
  render() {
    return (
      <div style = {{
          color: `${this.props.color}`
      }}>
        <p>Hello {this.props.number}</p>
      </div>
    );
  }
}

export default MyText;
