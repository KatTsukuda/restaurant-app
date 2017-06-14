import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './components/Restaurant'
import SubmitForm from './components/SubmitForm'
import $ from 'jquery-ajax';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      image: "",
      id: "",
      address: "",
      type: "",
      rating: ""
    }
  }

  componentDidMount() {
    let yelp = this;

    $.ajax({
          method: 'GET',
          url: "/wood-tavern-oakland",
          beforeSend: function(xhr) {
                  xhr.setRequestHeader("Authorization", "Bearer UKWxH_2pKgsmhYvw3sfPK08BPbQFVB2ZkM4umAhZ47NAS7Z-YNdBY-ggeF8mv4JdrWcwNuk7aAErQEwLZkiHehETJTHRMoawVexgx4DU-SSZWboxyaUxBRciTM0wWXYx");
          },
          success: function(data){
            console.log(data)
            yelp.setState({
              title: data.name,
              image: data.photos[1],
              id: data.id,
              address: data.location.display_address.map((address) => address + " "),
              type: data.categories[0].title,
              rating: data.rating
            })
          }
        })
  }

  render() {
    return (
      <div className="App">
          <Header />
          <SubmitForm />
          <Restaurant
            title={ this.state.title }
            image={ this.state.image}
            id={ this.state.id }
            address={ this.state.address }
            type={ this.state.type }
            rating={this.state.rating }/>
          <Footer />
      </div>
    );
  }
}

export default App;
