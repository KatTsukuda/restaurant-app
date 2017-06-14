import React, { Component } from 'react';


class Restaurant extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" data-id="">
          <div className="col-xs-1">
            <img src="#" className="images" />
          </div>
          <div className="col-xs-4">
            <h2 className="restaurant-name">{this.props.title}</h2>
            <p className="rating">Rating stars out of 5</p>
            <p className="address">Address</p>
            <p className="text-muted"><em>Restaurant Type</em></p>
          </div>
          <div className="col-xs-4">
            <p><strong>Notes:</strong></p>
            <p className="notes"></p>
          </div>
          <div className="col-xs-2">
            <button type="button" name="button" className="deleteBtn btn btn-default" data-id="${restaurants._id}">
              <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Restaurant;
