// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  handleOnChange = event => {
    console.log("changing")
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Enter Band Name: </label>
          <input 
          type="text"
          name="name"
          value={this.state.name} 
          onChange={(event) => this.handleOnChange(event)}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
};

export default BandInput;

// need to connect up the dispatch to submit local state data to the store.
