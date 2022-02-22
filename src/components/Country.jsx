import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function Country() {

    const [officialName, setOfficialName] = useState('');
    const [population, setPopulation] = useState('');
    const [region, setRegion] = useState('');
    const [flag, setFlagUrl] = useState('');
    const [capital, setCapital] = useState([]);
    const [map, setMap] = useState('');
    
    const {name} = useParams();

    useEffect( () => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then(res =>{
            const data=res.data[0];
            setOfficialName(data.name.official);
            setPopulation(data.population);
            setRegion(data.region);
            setFlagUrl(data.flags.png);
            setCapital(data.capital);
            setMap(data.maps.googleMaps);
        })
        .catch(err => console.log(err))

    },[]);
        
    // console.log(officialName);

  return (
    <div>
        <img src={flag} alt=""></img>
        <div>Country name: {name}</div>
        <div>Official name: {officialName}</div>
        <div>Capital: {capital}</div>
        <div>Region: {region}</div>
        <div>Population: {population}</div>
        <a href={map} target="_blank">Google Map </a>
    </div>
  )
}

export default Country
