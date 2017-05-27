import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      counts: 1
    }

  //  this.incrementCounter = this.incrementCounter.bind(this)

  }

incrementCounter = () => {
  this.setState({counts: this.state.counts + 1})

}

  render() {

    //  const title = this.props.myTitle noob way
      const {myTitle} = this.props //es6 goodness
      const isButtonShowing = this.state.counts !== 5
      const $button =(
        <button onClick={this.incrementCounter}>INCREMENT</button>
      )

    return (
      <div>
        <h1>{myTitle}</h1>

        {isButtonShowing ? $button : null}


        <h2>{this.state.counts}</h2>
      </div>
    )
  }
}

export default Header
