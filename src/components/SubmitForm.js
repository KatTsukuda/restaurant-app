import React, { Component } from 'react';

class SubmitForm extends Component {
  constructor(){
    super()
    this.state = {
      restaurant: ''
    }
  }

  onFormSubmit(event){
  console.log('form submitted')
  event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={event => this.onFormSubmit(event)} id="rest-form">
        <div className="row">
          <div className=" col-xs-6 col-md-4 col-xs-offset-1">
            <label htmlFor="restaurant">Restaurant</label>
            <input type="text" className="form-control" name="name" placeholder="Restaurant full name" />
          </div>
          <div className="col-xs-6 col-md-4 ">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control" name="address" placeholder="City e.g. Oakland" />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">Submit</button>
        </div>
      </form>
    )
  }
}

export default SubmitForm
