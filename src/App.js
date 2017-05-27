import React, { Component } from 'react';
import './App.css';

//this imports Header
import Header from './features/header/Header'
import Footer from './features/footer/Footer'
import Content from './features/content/Content'
//import Content from './features/content/Content'

//this imports Header
//import Header from '.features/header'

class App extends Component {
constructor(){
  super()
  this.state = {
    movieCount: 0
  }
}

incrementCounter = () => {
  this.setState({movieCount: this.state.movieCount + 1})
}

  render() {
    const title = 'Header Title' //inside render function

    return (
      <div className="App">
        <h1>{this.state.movieCount}</h1>
        <Header myTitle={title}/>
        //passing method as prop
        <Content incrementCounter={this.incrementCounter}/>

        <Footer />
      </div>
    );
  }
}

export default App;
