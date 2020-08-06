import React, { Component } from "react";
import Form from "../../components/Form";
import "./Home.css";


class Home extends Component {
  state = {
  };

  render() {
    return (
      <div className="container">
        <div className="row p-5">
          <div className="col-6 mx-auto">
            <Form/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
