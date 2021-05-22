import React, { Component } from "react";
import List from "./List";
import MyText from "./MyText";
import context from './Context'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      theme: 'green'
    }
    this.changeTheme = this.changeTheme.bind(this)
  }
  changeTheme(){
    this.setState ({
      theme: (this.state.theme === 'red' ? 'black' : 'red')
    })
    console.log(this.state.theme);
  }
  render() {
    let myFavMovies = ["Rocky Balboa", "Gladiator", "Stalk"];
    const Provider = context.Provider;
    return (
      <>
        <Provider value = {this.state.theme}>      
          <div className="mainDiv">
            <button onClick = {this.changeTheme}>Change theme</button>
            <List listiBovand="Movies" listLi={myFavMovies} />
            <MyText color = {this.state.theme} />
          </div>
        </Provider>
      </>
    );
  }
}
export default Home;
