import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllCountries extends Component {

  constructor(props){
    super(props);
    this.state = {
      allCountries: [],
      country: {}
    }
  }

  componentDidMount = () => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(result => this.setState({allCountries: result.data}))
      .catch(err => {console.log(err)})
  }

  render() {
    console.log(this.state.country);
    return (
      <div className="countries">
        
        {this.state.allCountries && this.state.allCountries.map((result, index) => {
          return(
            <div key={index} > 
                <div className='country-flag'>
                  <img src={result.flags.png} alt=""></img>
                  <Link to={`/country/${result.name.common}`}>
                    <h3>{index+1}{`. `}{result.name.common}</h3>
                  </Link>
                  
                </div>
            </div>
          )
        })
        
        }

      </div>
    )
  }
}
