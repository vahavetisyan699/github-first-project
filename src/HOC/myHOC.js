import React from "react";

function myHOC(Comp) {
  class RandomNumber extends React.Component {
    getRandomNumber(min, max) {
      return  Math.floor(Math.random() * (max - min) + min);
    }
    getRgb(){
        return `rgb(${this.getRandomNumber(1,255)},${this.getRandomNumber(1,255)},${this.getRandomNumber(1,255)})`
    }
    render() {
      return <Comp number={this.getRandomNumber()} myColor={this.getRgb()}/>;
    }
  }
  return RandomNumber;
}

export default myHOC;
