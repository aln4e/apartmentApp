import React, { Component } from 'react'
import Apartments from './store/Apartments'
import {Link} from 'react-router-dom'

class ApartmentDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: Apartments
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({apartmentId: id})
    let apartment = this.state.apartments.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(apartment){
      this.setState({apartment: apartment})
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <h2>This apartment is available in: {this.state.apartment.name}</h2>
        <img src= {this.state.apartment.src} />
        <iframe width="560" height="315" src= {this.state.apartment.youtube} frameborder="0" allowfullscreen></iframe>
        <a href={this.state.apartment.comps} target = '_blank'><h2>Check Out Other Apartments in {this.state.apartment.name}!</h2></a>
        <a href={this.state.apartment.advantages} target = '_blank'><h5>Advantages of living in {this.state.apartment.name}</h5></a>
        <a href={this.state.apartment.disadvantages} target = '_blank'><h5>Disadvantages of living in {this.state.apartment.name}</h5></a>

      </div>
    );
  }
}

export default ApartmentDetail;
