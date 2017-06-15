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
      rating: "",
      url: ""
    }
  }

  // componentDidMount() {
  //   this.fetchData()
  // }

  // createRest(data) {
  //   console.log(data)
  //   let newRest =
  //
  //     this.setState({
  //       title: data.name,
  //       image: data.photos[1],
  //       id: data.id,
  //       address: data.location.display_address.map((address) => address + " "),
  //       type: data.categories[0].title,
  //       rating: data.rating,
  //       url: data.url
  //     })

  //}

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
            rating={ this.state.rating }
            url={ this.state.url }/>
          <Footer />
      </div>
    );
  }
}

export default App;
