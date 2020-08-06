import React, { Component } from "react";
import API from "../../utils/API";
import "./Form.css"


class Form extends Component {
  state = {
    recipient: "",
    cc: "",
    name: "",
    location: "",
    issue: {
      damage: false,
      data: false,
      power: false,
      other: false
    },
    description: "",
    ticket: 0
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  
  handleFormSubmit = e => {
    e.preventDefault()
 
    // this.sendEmail()
  }

  sendEmail = () => {
    API.email({
      email: ""
    })
      .then(res => {

      })
  }
  
  render() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col-6">
            <label className="font-weight-bold">Recipient:</label>
            <input type="email" className="form-control" name="recipient" value={this.state.recipient}  onChange={this.handleInputChange}/>
          </div>
          <div className="form-group col-6">
            <label className="font-weight-bold">CC:</label>
            <input type="email" className="form-control" name="cc" value={this.state.cc}  onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="form-row form-group">
            <label className="font-weight-bold">Template:</label>
            <select id="inputTemplate" className="form-control">
              <option selected>Choose...</option>
              <option>Dynamic Message Sign Issue</option>
            </select>
        </div>
        <div className="form-row form-group">
            <label className="font-weight-bold">CSR Name:</label>
            <input type="text" className="form-control" name="name" value={this.state.name}  onChange={this.handleInputChange}/>
        </div>
        <div className="form-row form-group">
            <label className="font-weight-bold">Location:</label>
            <input type="text" className="form-control" name="location" value={this.state.location}  onChange={this.handleInputChange}/>
        </div>
        
        <div className="form-row form-group">
        <label className="font-weight-bold w-100">Issue Type:</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="damageCheckbox" value="damage"/>
            <label className="form-check-label">Damage</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="dataCheckbox" value="data"/>
            <label className="form-check-label">Data</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="powerCheckbox" value="power" />
            <label className="form-check-label">Power</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="otherCheckbox" value="other" />
            <label className="form-check-label">Other</label>
          </div>
        </div>
        <div className="form-row form-group">
            <label className="font-weight-bold">Additonal Description:</label>
            <textarea type="text" className="form-control description" name="description" value={this.state.description}  onChange={this.handleInputChange}/>
        </div>
        <div className="form-row form-group">
          <label className="font-weight-bold">IT Service Now Ticket Number:</label>
          <input type="number" className="form-control" id="ticketNum"/>
        </div>
        <div className="form-row form-group">
          <button type="submit" className="btn btn-primary btn-block sendBtn">Send</button>
        </div>
      </form>
    );
  }
}

export default Form;
