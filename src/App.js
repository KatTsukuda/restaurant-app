import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './components/Restaurant'
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
          <Restaurant />
          <Footer />
      </div>
    );
  }
}

export default App;
