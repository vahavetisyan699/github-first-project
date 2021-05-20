import React, { Component } from "react";
import Myinput from "./Myinput";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }
  submit(e) {
    e.preventDefault()
    console.log(1);
  }
  render() {
    return (
      <>
        <form className="form" action="">
          <Myinput ref = {this.inputRef} label="Username" type="text" />
          <Myinput label="Password" type="text" />
          <input onClick={this.submit} type="submit" />
        </form>
      </>
    );
  }
}
