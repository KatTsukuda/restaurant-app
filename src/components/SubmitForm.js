import React, { Component } from 'react';

class SubmitForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: '',
      city: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event){
    console.log('create todo input changed')
    const target  = event.target;
    const value   = target.value;
    const name    = target.name;

    this.setState({
      [name]: value
    })
    }


  onFormSubmit(event){
  console.log('form submitted')
  console.log(this.state.restaurant)
  console.log(this.state.city);
  event.preventDefault()

  }

  render() {
    return (
      <form onSubmit={event => this.onFormSubmit(event)} id="rest-form">
        <div className="row">
          <div className=" col-xs-6 col-md-4 col-xs-offset-1">
            <label htmlFor="restaurant">Restaurant</label>
            <input type="text"
                   className="form-control"
                   name="restaurant"
                   placeholder="Restaurant full name"
                   onChange={ this.onInputChange }
                   value={ this.state.restaurant }/>
          </div>
          <div className="col-xs-6 col-md-4 ">
            <label htmlFor="city">City</label>
            <input type="text"
                   className="form-control"
                   name="city"
                   placeholder="City e.g. Oakland"
                   onChange={this.onInputChange}
                   value={ this.state.city } />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">Submit</button>
        </div>
      </form>
    )
  }
}

export default SubmitForm
