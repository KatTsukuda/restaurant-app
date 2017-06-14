import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import $ from 'jquery-ajax';

class App extends Component {

  componentDidMount() {
    $.ajax({
          method: 'GET',
          url: "/wood-tavern-oakland",
          beforeSend: function(xhr) {
                  xhr.setRequestHeader("Authorization", "Bearer UKWxH_2pKgsmhYvw3sfPK08BPbQFVB2ZkM4umAhZ47NAS7Z-YNdBY-ggeF8mv4JdrWcwNuk7aAErQEwLZkiHehETJTHRMoawVexgx4DU-SSZWboxyaUxBRciTM0wWXYx");
          },
          success: function(data){
            console.log(data)
          }
        })
  }

  render() {
    return (
      <div className="App">
          <Header />
          <div className="container">
        <div className="row" data-id="${restaurants._id}">
          <div className="col-xs-1">
            <img src="#" className="images" />
          </div>
          <div className="col-xs-4">
            <h2 className="restaurant-name">Restaurant Name</h2>
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
          <Footer />
      </div>
    );
  }
}

export default App;
