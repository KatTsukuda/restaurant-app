import React, {Component} from 'react'

class Header extends Component{
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 header">
            <h1 className="title">Good Eating</h1>
            <p className="slug-line">A custom list of your favorite restaurants!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
