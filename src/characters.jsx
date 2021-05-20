import React, { Component } from "react";
import { request } from "./providers/v.lib";
import xman from "./providers/const";
import Loading from "./Loading";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      isLoad: true,
      charId: 0,
    };
  }
  componentDidMount() {
    request(xman, "GET")
      .then((namak) => {
        this.setState({ characters: namak.results, isLoad: false });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  drawSelCharPage() {
    console.log(1);
  }
  render() {
    return (
      <>
        <div className="charactersDiv">
          {this.state.isLoad ? (
            <Loading />
          ) : (
            this.state.characters.map((el, i) => {
              return (
                <>
                  <div className="charactersImg">
                    <div onClick={this.drawSelCharPage}>
                      <img style={{ width: "300px" }} src={el.img} alt="" />
                    </div>
                    <div className="charactersName">
                      <p>
                        {i + 1}. {el.name}
                      </p>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </>
    );
  }
}
