import React, { Component } from 'react';


class Restaurant extends Component {
  render() {
    return (
      <div className="container">
        <div className="row restaurant-row" data-id={ this.props.id }>
          <div className="col-xs-4 col-md-2 images">
            <img src={ this.props.image } alt={ this.props.title }></img>
          </div>
          <div className="col-xs-5 col-md-4">
            <a className="restaurant-name" href={ this.props.url }><h2 className="restaurant-name">{ this.props.title }</h2></a>
            <p className="rating">{ this.props.rating } stars</p>
            <p className="address">{ this.props.address }</p>
            <p className="text-muted"><em>{ this.props.type }</em></p>
          </div>
          <div className="col-xs-4">
            <p><strong>Notes:</strong></p>
            <p className="notes"></p>
          </div>
          <div className="col-xs-1">
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
