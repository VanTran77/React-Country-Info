import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
        <div className="header">
            <p>Get all countries in the worlds</p>
            <div className="header-nav">
                <h3>
                    <Link className='link' to="/">Home</Link>
                </h3>
                <h3>
                    <Link className='link' to="/countries">Countries</Link>
                </h3>
            </div>
        </div>

    )
  }
}
