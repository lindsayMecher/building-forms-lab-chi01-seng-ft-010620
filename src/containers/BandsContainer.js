import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { BandCard } from '../components/BandCard';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  renderBands = () => {
    console.log(this.props.bands)
    return this.props.bands.map(( band, index )=> {
      return(
        <BandCard band={band} key={index} />
      )
    })
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <BandInput addBand={this.props.addBand} bands={this.props.bands}/>
        <h1>Bands: </h1>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (name) => dispatch({type: "ADD_BAND", payload: name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

// connect store state up to props and map over that data and send
// down as props to the Band cards.
