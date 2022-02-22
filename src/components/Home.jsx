import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name:'',
        officialName: '',
        capital:[],
        population:0,
        region:'',
        flag:'',
        map: ''
    }
}

componentDidMount = () => {

    // const name = window.location.href.split('/')[window.location.href.split('/').length - 1];
    const api= `https://restcountries.com/v3.1/name/Netherlands`;

    axios.get(api)
        .then(res =>{
            const data=res.data[0];
            this.setState({
                name: 'Netherlands',
                officialName: data.name.official,
                capital :data.capital,
                population: data.population,
                region: data.region,
                flag: data.flags.png,
                map: data.maps.googleMaps,
            })
        })
        .catch(err => console.log(err))

}

  render() {
      const {flag, name, officialName, capital, population, region, map} = this.state;
        return (
        <div className='oneCountry'>
            <img src={flag} alt={name} />
            <br />
            <h3>Country: {name}</h3>
            <label><strong>Official name:</strong> {officialName}</label>
            <br />
            <label><strong>Capital:</strong> {capital}</label>
            <br />
            <label><strong>Population:</strong> {population}</label>
            <br />
            <label><strong>Region:</strong> {region}</label>
            <br />
            <a href={map} target="_blank">Google Map </a>
        </div>
    )
  }
}
