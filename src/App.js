import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Countries from './components/Countries';
// import Country from './components/Country';
import Country from './components/CountryClass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CountryClass from './components/CountryClass';

export default function App(){
    return (
      <div className="App">
       
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/countries" element={<Countries />}/>
            {/* <Route path="/Country/:name" element={<Country />} /> */}
            <Route path="/Country/:name" element={<CountryClass />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}
