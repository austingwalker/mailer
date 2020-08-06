import React, { Component } from "react";
import API from "../../utils/API";
import moment from 'moment'
import "./Form.css"


class Form extends Component {
  state = {
    recipient: "",
    cc: "",
    name: "",
    template: "",
    location: "",
    issue: "",
    description: "",
    ticket: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTemplate = e => {
    this.setState({template: e.target.value})
  }

  handleCheck = e => {
    const value = e.target.value
    if(this.state.issue === value){
      this.setState({ issue: "" })
    } else {
      this.setState({ issue: value })
    }
  }

  
  handleFormSubmit = e => {
    e.preventDefault()
    const payload = {
      recipient: this.state.recipient,
      cc: this.state.cc,
      name: this.state.name,
      template: this.state.template,
      location: this.state.location,
      issue: this.state.issue,
      description: this.state.description,
      ticket: this.state.ticket,
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
    console.log(payload)
    this.sendEmail(payload)
  }

  sendEmail = (payload) => {
    // API.getTest()
    //   .then(res =>
    //     console.log(res)
    //   )
    //   .catch(err => console.log(err));
    API.email({
      data: payload
    })
      .then(res => {
        console.log(res)
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
            <select id="inputTemplate" className="form-control" value={this.state.template} onChange={this.handleTemplate}>
              <option selected>Choose...</option>
              <option value="Dynamic Message Sign Issue">Dynamic Message Sign Issue</option>
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
            <input className="form-check-input" type="checkbox" id="damageCheckbox" value="Damage" onChange={this.handleCheck}/>
            <label className="form-check-label">Damage</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="dataCheckbox" value="Data" onChange={this.handleCheck}/>
            <label className="form-check-label">Data</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="powerCheckbox" value="Power" onChange={this.handleCheck}/>
            <label className="form-check-label">Power</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="otherCheckbox" value="Other" onChange={this.handleCheck}/>
            <label className="form-check-label">Other</label>
          </div>
        </div>
        <div className="form-row form-group">
            <label className="font-weight-bold">Additonal Description:</label>
            <textarea type="text" className="form-control description" name="description" value={this.state.description}  onChange={this.handleInputChange}/>
        </div>
        <div className="form-row form-group">
          <label className="font-weight-bold">IT Service Now Ticket Number:</label>
          <input type="text" className="form-control" id="ticketNum" name="ticket" value={this.state.ticket}  onChange={this.handleInputChange}/>
        </div>
        <div className="form-row form-group">
          <button type="submit" className="btn btn-primary btn-block sendBtn" onClick={this.handleFormSubmit}>Send</button>
        </div>
      </form>
    );
  }
}

export default Form;
